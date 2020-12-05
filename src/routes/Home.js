import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { dbService } from '../fbase';
import SubmitAnswer from '../components/SubmitAnswer'
import Board from '../components/Board';
import Wrongs from '../components/Wrongs';
import { Grid, Button } from '@material-ui/core';
import './css/Home.css';
import {IoPlaySharp} from 'react-icons/io5';
import ChangeAnswer from '../components/ChangeAnswer';
import useSound from 'use-sound';
import dingdong from '../sound/sound3.mp3';
import qrcode from '../img/qrcode.png';
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
    const onStartQuizClicked = () => {
        dbService.collection('current').doc('current').update({
            currentQuiz: 0,
            isStarted: true,
            showAnswer: false,
            showWrongs: false
        })
    } 
    const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer);

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

    if(!isStarted)
        return (
            <Grid id="ready" container direction="row">
                <Grid container item xs={12} md={6} spacing={2}>
                    <Grid item xs={12}>
                        <h1>
                            곧 [RE퀴즈 인 영락]이 시작됩니다!
                            <br/>
                            {isAdmin && "아직 접속하지 못한 분들은 QR코드를 통해 접속해주세요!"}
                        </h1>
                    </Grid>
                    {isAdmin &&
                        <Grid container item xs={12} spacing={2} justify="center">
                            <img src={qrcode} alt="QR code"/>
                        </Grid>
                    }
                </Grid>
                { isAdmin &&
                    <Grid container item xs={12} md={6} alignItems="center" justify="center" spacing={4}>
                        <Button variant="contained"
                            color="primary" 
                            onClick={onStartQuizClicked}
                            fullWidth
                            style={{height:"100px"}}>
                                <IoPlaySharp size="30"/>&nbsp;<h1>Start</h1>
                        </Button>
                    </Grid>
                }
            </Grid>
        )
    return (
        <>
        <Grid container direction="row" spacing={2} alignItems="stretch">
            <Grid container item xs={12} md={8} direction="row">
                <Grid item xs={12}>
                        <Quiz 
                            quizs={quizs}
                            currentQuiz={currentQuiz}
                            showAnswer={showAnswer}/> 
                </Grid>

                { isAdmin &&
                    <Grid id="admin-button-box" container item xs={12} direction="row" justify="flex-end" alignItems="center">
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
                    </Grid>
                }

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
        </>
    )
}

export default Home;