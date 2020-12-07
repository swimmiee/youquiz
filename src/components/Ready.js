import React from 'react';
import { Grid, Button, Paper } from '@material-ui/core';
import { IoPlaySharp } from 'react-icons/io5';
import qrcode from '../img/qrcode.png';
import logo from '../img/logo.png';
import { dbService } from '../fbase';
import { IoLogoOctocat } from 'react-icons/io5';

const Ready = ({isAdmin}) => {
    const onStartQuizClicked = () => {
        dbService.collection('current').doc('current').update({
            currentQuiz: 0,
            isStarted: true,
            showAnswer: false,
            showWrongs: false
        })
    } 
    return (
        <div id="ready">
            <div className="ready-left">
                <div className="welcome">
                    <h2> { !isAdmin ? "QR코드를 스캔하면 퀴즈에 참여할 수 있습니다." : "곧 퀴즈가 시작됩니다."} </h2>
                    <h2> 참여해주신 분들께 추첨을 통해 선물을 보내드립니다! </h2>
                </div>
                <div>
                    <img src={ !isAdmin ? qrcode : logo} alt="QR code"/>
                </div>
            </div>
            <div className="ready-right">
                <Button variant="contained"
                        color="default" 
                        onClick={onStartQuizClicked}
                        fullWidth>
                        <IoPlaySharp size="30"/>&nbsp;
                </Button>
            </div>
        </div>
)}

export default Ready;