import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Ready from '../components/Ready';
import Quiz from '../components/Quiz';
import { dbService } from '../fbase';
import SubmitAnswer from '../components/SubmitAnswer'
import Board from '../components/Board';
import Wrongs from '../components/Wrongs';
import { Grid, Button } from '@material-ui/core';
import './css/Home.css';
import ChangeAnswer from '../components/ChangeAnswer';
import useSound from 'use-sound';
import sarr from '../sound/sarr.mp3';
import babam from '../sound/babam.mp3';
import dodongtak from '../sound/dodongtak.mp3';
import quizs from '../quizs';

const Home = ({user, doc_user_id, currentInfo, goals}) => {
    const {isAdmin} = user
    const {currentQuiz, showAnswer, showScore, showWrongs, isStarted, users} = currentInfo;
    const {score, goal} = goals;
    const [isSolved, setIsSolved] = useState(false);
    const [participants, setParticipants] = useState(0);
    const [corrects, setCorrects] = useState(0);
    const [wrongs, setWrongs] = useState([]);
    const [[playSarr], [playBabam], [playDodongtak]] = [useSound(sarr), useSound(babam), useSound(dodongtak)];
    const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer.toLowerCase());

    const setShowAnswer = (bool) => {
        dbService.collection('current').doc('current').update({
            showAnswer: bool
        })
        playSarr();
    }
    const setShowScore = async (bool) => {
        if(isAdmin)
            await updateScore();
        dbService.collection('current').doc('current').update({
            showScore: bool
        })
        playDodongtak();
    }
    const onPrevQuizClicked = () => {
        dbService.collection('current').doc('current').update({
            currentQuiz: currentQuiz-1,
            showWrongs: false
        })
    }
    const onNextQuizClicked = async () => {
        dbService.collection('current').doc('current').update({
            currentQuiz: currentQuiz+1,
            showWrongs: false,
            showAnswer: false,
            showScore: false
        });
        playBabam();
    }
    const updateScore = async () => {
        let sofarCorrectors = 0;
        await Promise.all(
            quizs.filter( q => q.no<=quizs[currentQuiz].no)
                .map( async q => {
                    const peopleAnswers = (await dbService.collection("quiz_"+q.no).get()).docs.map(doc => doc.data());
                    sofarCorrectors+=peopleAnswers.reduce((sum, ansObj)=>{
                        return isCorrectAnswer(ansObj.answer, q.answers) ?
                            (ansObj.isAdmin ? sum+10 : sum+1)
                        : sum
                    }, 0)
                })
        )
        dbService.collection('current').doc('goals').update({
            score: sofarCorrectors
        })
    }

    const checkSolved = async () => {
        setIsSolved(user['quiz_'+quizs[currentQuiz].no]);
    }

    useEffect( () => {
        checkSolved()
    }, [currentQuiz, user])

    useEffect(() => {
        const {no, answers} = quizs[currentQuiz];
        dbService.collection("quiz_"+no).onSnapshot( snapshot => {
            const peopleAnswers = snapshot.docs.map( doc => doc.data() );
            setParticipants(peopleAnswers.length);
            let c = 0, w = [];
            peopleAnswers.forEach( person => {
                isCorrectAnswer(person.answer, answers) ? 
                      c++
                    : w = [...w, person]
            })
            setCorrects(c.length);
            setWrongs(w);
        })
    }, [currentQuiz])

    return (
        <>
        {
        !isStarted ?
            <Ready isAdmin={isAdmin} users={users}/>
        :
        
        <Grid container direction="row" spacing={2} alignItems="stretch">
            <Grid container item xs={12} md={8} direction="row">
                <Grid item xs={12}>
                        <Quiz 
                            quizs={quizs}
                            currentQuiz={currentQuiz}
                            showAnswer={showAnswer}/> 
                </Grid>

                <Grid id="admin-button-box" container item xs={12} direction="row" justify="flex-end" alignItems="center">
                    { isAdmin ?
                        <>
                        { currentQuiz > 0 && 
                            <Grid item xs={6} md={3}>
                                <Button variant="contained"
                                    color="primary" 
                                    fullWidth 
                                    onClick={onPrevQuizClicked}>
                                        이전 문제
                                </Button>
                            </Grid>
                        }
                        <Grid item xs={6} md={3}>
                            {   
                                showAnswer ? 
                                    !showScore ?
                                        <Button variant="contained" 
                                            color="default" 
                                            fullWidth 
                                            onClick={()=>setShowScore(true)}>
                                                점수 공개
                                            </Button>
                                    :
                                    ( currentQuiz+1<quizs.length ?
                                            <Button variant="contained" 
                                                color="primary" fullWidth 
                                                onClick={onNextQuizClicked}>
                                                    다음 문제
                                            </Button>
                                        :
                                            <Link to="/draw">
                                                <Button variant="contained" color="primary" fullWidth>
                                                    추첨
                                                </Button> 
                                            </Link>
                                        )
                                : 
                                    <Button variant="contained" 
                                        color="secondary" 
                                        fullWidth 
                                        onClick={()=>setShowAnswer(true)}>
                                            정답 공개
                                        </Button>
                                
                            }
                        </Grid>
                        </>
                        :
                        (currentQuiz+1)===quizs.length &&
                            <Grid item xs={12} md={6}>
                                <Link to="/showresult">
                                    <Button variant="contained" color="primary" fullWidth>
                                        추첨 결과 확인
                                    </Button>
                                </Link>
                            </Grid>
                    }
                </Grid>

                <Grid item xs={12}>
                    {quizs.length 
                        && !showAnswer
                        && (
                            !isSolved ?
                            <SubmitAnswer no={quizs[currentQuiz].no} user={user} doc_user_id={doc_user_id}/>
                            : <ChangeAnswer user={user} no={quizs[currentQuiz].no}/>
                        )}
                </Grid>
                <Grid item xs={12}>
                    <Board 
                        participants={participants}
                        corrects={corrects}
                        showAnswer={showAnswer}
                        score={score}
                        goal={goal} />
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Wrongs wrongs={wrongs} isAdmin={isAdmin} showWrongs={showWrongs}/>
            </Grid>
        </Grid>
        }
     </>
    )
}

export default Home;