import React, { useEffect, useState } from 'react';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import { dbService } from '../fbase';


const ChangeAnswer = ({user, no}) => {
    const [myAnswer, setMyAnswer] = useState('');
    const [newAnswer, setNewAnswer] = useState('');
    const [answerCorrectionMode, setAnswerCorrectionMode] = useState(false);
    const toggleAnswerCorrectionMode = () => setAnswerCorrectionMode( prev => !prev);
    const onInputChange = (event) => {
        const {target: {value}} = event;
        setNewAnswer(value);
    }
    const correctAnswer = async (event) => {
        event.preventDefault();
        if(newAnswer==''){
            alert('변경하실 정답을 입력해주세요.');
            return;
        }
        if(newAnswer !== myAnswer){
            const dbAns = await dbService.collection('quiz_'+no).where('uid','==',user.uid).get();
            await dbService.collection('quiz_'+no).doc(dbAns.docs[0].id).update({
                answer:newAnswer
            })
            setMyAnswer(newAnswer);
        }
        toggleAnswerCorrectionMode();
    }
    useEffect(async () => {
        const dbAns = (await dbService.collection('quiz_'+no).where('uid','==',user.uid).get()).docs[0].data().answer;
        setMyAnswer(dbAns);
        setNewAnswer(dbAns);
    }, [])

    return (
        <div className="already-submit-message">
            {
                answerCorrectionMode ?
                <>
                <FormControl style={{alignItems:"center", textAlign:"center"}}>
                    <Input id="correct-input" 
                        type="text" 
                        aria-describedby="correct-helper" 
                        name="correct"
                        onChange={onInputChange}   
                        value={newAnswer}
                        style={{width:"70%", textAlign:"center"}}/>
                </FormControl>
                <Button onClick={correctAnswer} variant="contained" color="secondary" >
                    수정
                </Button>
                </>
                :
                <>
                <div className="my-answer">
                    <h3>내 정답 : {myAnswer}</h3>
                </div>
                <Button onClick={toggleAnswerCorrectionMode} variant="contained" color="primary">
                    바꾸기
                </Button>
                </>
            }
        </div>
    )
}

export default ChangeAnswer;