import React from 'react';
import {Button} from '@material-ui/core';
import { IoPersonSharp, IoPlaySharp } from 'react-icons/io5';
import qrcode from '../img/qrcode.png';
import logo from '../img/logo.png';
import { dbService } from '../fbase';

const Ready = ({isAdmin, users}) => {
    const onStartQuizClicked = () => {
        dbService.collection('current').doc('current').update({
            currentQuiz: 0,
            isStarted: true,
            showScore: false,
            showAnswer: false,
            showWrongs: false
        })
        dbService.collection('current').doc('goals').update({
            score:0
        })
    } 
    return (
        <div id="ready">
            <div className="ready-left">
                <div className="welcome">
                    <h2> { isAdmin ? "QR코드를 스캔하면 퀴즈에 참여할 수 있습니다." : "곧 퀴즈가 시작됩니다!"} </h2>
                    <h2> 참여해주신 벗님들께는 <br/> 추첨을 통해 선물을 보내드립니다! </h2>
                </div>
                <div>
                    <img src={ isAdmin ? qrcode : logo} alt="QR code"/>
                </div>
            </div>
            <div className="ready-right">
                <h2 className="users"><IoPersonSharp size="25"/>&nbsp;{users}</h2>
                { isAdmin && <Button variant="contained"
                        color="default" 
                        onClick={onStartQuizClicked}
                        fullWidth>
                        <IoPlaySharp size="30"/>&nbsp;
                </Button>}
            </div>
        </div>
)}

export default Ready;