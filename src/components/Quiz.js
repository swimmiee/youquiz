import React, { useState } from 'react';
import {Paper, Button} from '@material-ui/core';

const Quiz = ({quiz, showAnswer}) => {
    const {no, question, answer} = quiz;
    return (
        <Paper id="quiz" variant="outlined">
            <div className="title"> Q{no}. </div>
            <div className="question"> {question} </div>
            <div className="answer">
                정답 : &nbsp;&nbsp;
                { showAnswer ? answer[0] : "???"}
            </div>
        </Paper>
    )
}

export default Quiz;