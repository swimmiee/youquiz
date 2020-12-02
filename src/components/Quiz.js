import React from 'react';
import { Paper, Stepper, Step, StepLabel } from '@material-ui/core';
import { IoBagCheckSharp, IoBagCheckOutline } from 'react-icons/io5'

const Quiz = ({quizs, currentQuiz, showAnswer}) => {
    const {no, question, answer} = quizs[currentQuiz];
    const stepStyle={
        stepper:{
            padding:"1%",
            background:"inherit",
        }
    }
    return (
        <>
        <div className="christmas-striped top"></div>
        <Paper id="quiz" variant="outlined">
            <div className="quiz-timeline">
                <Stepper activeStep={currentQuiz} alternativeLabel style={stepStyle.stepper}>
                    {quizs.map((quiz, index) => (
                    <Step key={index}>
                        <StepLabel 
                            style={stepStyle.stepLabel}/>
                    </Step>
                    ))}
                </Stepper>
            </div>
            <div className="title"> Q{no}. </div>
            <div className="question" dangerouslySetInnerHTML={ {__html: question}}></div>
            <div className="answer">
                정답 : &nbsp;
                { showAnswer ? answer[0] : <><span className="loader"></span>&nbsp;&nbsp;</>}
            </div>
        </Paper>
        <div className="christmas-striped bottom"></div>
    </>
    )
}

export default Quiz;