import React, { useState, useEffect } from 'react';
import quizs from '../quizs';
import Navtab from '../components/Navtab';
import GetTable from '../components/GetTable';
import { Grid, Button } from '@material-ui/core';
import {IoRefresh} from 'react-icons/io5';
import './css/Draw.css';
import { dbService } from '../fbase';
import ResultTable from '../components/ReaultTable';

const Draw = () => {
    const [init, setInit] = useState(false);
    const [drawingTabIdx, setDrawingTabIdx] = useState(0);
    const [isDrawingCorrector, setIsDrawingCorrector] = useState(0);
    const [isDrawingFinished, setIsDrawingFinished] = useState(false);
    const [isDrawable, setIsDrawable] = useState(true);
    const [correctorInfos, setCorrectorInfos] = useState([]);
    const [participantInfos, setParticipantInfos] = useState([]);
    
    const tabnames = [...quizs.map(q => `Quiz ${q.no}`), "참여자"];
    const hideTel = tel => {
        if(tel ==="" || !tel)
            return "-"
        else if(tel.length <=4)
            return tel
        else
            return '***-****-'+tel.slice(-4);
    }
    const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer.toLowerCase());
    // 퀴즈별 정답자 및 전체 참여자 데이터 가져오기
    useEffect( async ()=>{
        let dbCors =[];
        await Promise.all( quizs.map( async (quiz) => {
            const {no, answers} = quiz;
            const participantsObj = (await dbService.collection("quiz_"+no).get())
                                    .docs.map( doc => doc.data());
            dbCors=[...dbCors, participantsObj
                                .filter( p => isCorrectAnswer( p.answer, answers ))
                                .map( p => [p.name, p.tel])];
        }))
        let part = [];
        (await dbService.collection('userinfo').get())
            .docs.map( doc => doc.data())
            .map( p => {
                part = [...part, [p.name, p.tel]];
            })
        setCorrectorInfos(dbCors);
        setParticipantInfos(part);
        setInit(true)
    },[])

    const rand = (start, end) => Math.floor((Math.random() * (end-start+1)) + start);
    const hasPerson = (peopleArr, person) => (
        peopleArr.some( p => p[0]==person[0] && p[1] == person[1])
    );
    
    const initiateDrawMachine = () => {
        isDrawingCorrector === 0 ?
            setIsDrawingCorrector(1)
            : setIsDrawable(false);
        setIsDrawingFinished(false);
    }
    const draw = async (curr) => {
        // 정답자
        let winners=[];
        const type = curr === 0 ? 'corrector' : 'participant';
        if(!curr){
            correctorInfos.map( (quizCorrectors, idx) => {
                let winner;
                do {
                    winner = quizCorrectors[rand(0, quizCorrectors.length-1)];
                } while (hasPerson(winners, winner));
                winners=[...winners, winner];
            })
        }
        //참여자 전체
        else{
            // const corWinners = Object.values((await dbService.collection('current').doc('corrector').get()).data());
            for(let i=0; i<10; i++){
                let winner;
                do {
                    winner = participantInfos[rand(0, participantInfos.length-1)];
                } while (hasPerson(winners, winner));
                // } while (hasPerson([...corWinners,...winners], winner));
                winners=[...winners, winner];
            }
        }
        await new Promise((resolve, reject) => {
            resolve('');
        }).then(() => {
            winners.map( async (w, idx) => {
                setTimeout( () => {
                    const no =parseInt(idx)+1;
                    dbService.collection("current").doc(type).update({
                        [no]: w
                    });
                }, 500+1000*idx)
                
            })
        }).then( () => {
            setTimeout(() => setIsDrawingFinished(true), 500+winners.length*1000)
        })
        
    }
    
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Navtab tabnames={tabnames} tabIdx={drawingTabIdx} tabController={setDrawingTabIdx}>
                    {
                        [...correctorInfos, participantInfos].map( (c, idx) => (
                            <GetTable 
                                key={idx}
                                title={["이름", "전화번호"]}
                                content={c.map( (([name, tel]) => [name, hideTel(tel)]))}
                                onBlankAltText={idx===correctorInfos.length ? "참여자가 없습니다." : "정답자가 없습니다."}/>
                        ))
                    }
                </Navtab>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="christmas-striped top"/>
                <div className="draw">
                    <Grid container alignContent="center" spacing={1} className="draw-machine">
                        <Grid item xs={12}>
                            <Button 
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={!isDrawable}
                                onClick={ () => draw(isDrawingCorrector)}>
                                    {!isDrawingCorrector ? 
                                        "정답자 6인 추첨" : "참여자 10인 추첨"}
                            </Button>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={6}>
                                <Button 
                                variant="contained"
                                disabled={!isDrawingFinished}
                                fullWidth
                                color="secondary"
                                onClick={ () => {
                                    setIsDrawingFinished(false);
                                    draw(isDrawingCorrector)
                                }}>
                                    <IoRefresh size="16"/>
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button 
                                    variant="contained"
                                    disabled={!isDrawingFinished}
                                    fullWidth
                                    color="default"
                                    onClick={initiateDrawMachine}>
                                        {!isDrawingCorrector ? 
                                        "다음 추첨" : "확인"}
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <ResultTable tabIdx={isDrawingCorrector} tabController={setIsDrawingCorrector}/>
                </div>
                <div className="christmas-striped bottom"/>
            </Grid>
        </Grid>
    )
}

export default Draw;