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
import dingdong from '../sound/sound3.mp3';
import quizs from '../quizs';

const Home = ({user, doc_user_id, currentInfo}) => {
    const {isAdmin} = user
    const {currentQuiz, showAnswer, showWrongs, isStarted} = currentInfo;
    const [isSolved, setIsSolved] = useState(false);
    const [participants, setParticipants] = useState(0);
    const [corrects, setCorrects] = useState(0);
    const [wrongs, setWrongs] = useState([]);
    const [play] = useSound(dingdong);

    const setCurrentQuiz = ( idx ) => {
        dbService.collection('current').doc('current').update({
            currentQuiz: idx
        })
    }
    const setShowAnswer = (bool) => {
        dbService.collection('current').doc('current').update({
            showAnswer: bool
        })
    }
    const onPrevQuizClicked = () => {
        setCurrentQuiz( currentQuiz - 1 );
        setShowAnswer(false);
        dbService.collection('current').doc('current').update({
            showWrongs: false
        })
    }
    const onNextQuizClicked = () => {
        setCurrentQuiz( currentQuiz + 1);
        setShowAnswer(false);
        dbService.collection('current').doc('current').update({
            showWrongs: false
        })
    }
    const checkSolved = async () => {
        if(!quizs.length)
            return;
        setIsSolved(user['quiz_'+quizs[currentQuiz].no]);
    }
    const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer.toLowerCase());

    useEffect( () => {
        checkSolved()
    }, [quizs, currentQuiz, user])
    useEffect( async () => {
        const {no, answers} = quizs[currentQuiz];
        dbService.collection("quiz_"+no).onSnapshot( snapshot => {
            const peopleAnswers = snapshot.docs.map( doc => doc.data() );
            setParticipants(peopleAnswers.length);
            let c = [], w = [];
            peopleAnswers.map( person => {
                isCorrectAnswer(person.answer, answers) ? 
                      c = [...c, person]
                    : w = [...w, person]
            })
            setCorrects(c.length);
            setWrongs(w);
        })
    }, [currentQuiz])
    useEffect( () => {
        showAnswer && play();
    }, [showAnswer])

    return (
        <>
        {
        !isStarted ?
            <Ready isAdmin={isAdmin}/>
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
                                : <Button variant="contained" 
                                    color="secondary" 
                                    fullWidth 
                                    onClick={()=>setShowAnswer(true)}>
                                        정답 공개
                                    </Button>
                            }
                        </Grid>
                        </>
                        :
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
                    {quizs.length && 
                        <Board participants={participants} corrects={corrects}/>}
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