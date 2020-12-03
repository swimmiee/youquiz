import React, { useState, useEffect } from 'react';
import { Paper, Grid, Button, AppBar, Tabs, Tab, Table, 
    TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import {IoRefresh} from 'react-icons/io5';
import './css/Draw.css';
import { dbService } from '../fbase';

const Draw = () => {
    const [init, setInit] = useState(false);
    const [quizNos, setQuizNos] = useState([])
    const [quizCorrectorInfos, setQuizCorrectorInfos] = useState([]);
    const [value, setValue]= useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    const useDrawMachine = () => {
        const initialDrawer = "번 문제의 당첨자는 누구일까요?";
        const [currentDrawQuiz, setCurrentDrawQuiz] = useState(0)
        const [currentDrawer, setCurrentDrawer] = useState(1+initialDrawer);
        const [drewList, setDrewList] = useState([]);
        const [isDrawingFinished, setIsDrawingFinished] = useState(false);
        const [isDrew, setIsDrew] = useState(false);
        const rand = (start, end) => Math.floor((Math.random() * (end-start+1)) + start);
        const drawing = async (list, repetitions) => {
            let x = 0;
            let intervalID;
            intervalID = setInterval(() => {
                new Promise((resolve, reject) => {
                    resolve('')
                }).then( () => {
                    const display = `${list[rand(0,list.length-1)].name}`;
                    setCurrentDrawer(display);
                    if (++x == repetitions){
                        clearInterval(intervalID);
                        setTimeout(()=> setIsDrawingFinished(true), 500);
                    }
                })
            }, 100);
        }

        const draw = async () => {
            setIsDrawingFinished(false);
            const peopleList = quizCorrectorInfos[currentDrawQuiz];
            if(!(peopleList.length))
                return;
            await drawing(peopleList, 20)
            setIsDrew(true)
        }
        const initiateDrawMachine = (currentQuiz) => {
            setCurrentDrawer((currentQuiz+1)+initialDrawer);
            setCurrentDrawQuiz(currentQuiz);
            setIsDrawingFinished(false);
            setIsDrew(false);
        }
        const updateDrewList = (num, winner) => setDrewList( 
            prev => [...prev.filter(([no, name]) => no!==num),
                     [num, winner]]
        )
        return [currentDrawer, currentDrawQuiz, isDrawingFinished, isDrew, draw, initiateDrawMachine, drewList, updateDrewList];
    }
    const [currentDrawer, currentDrawQuiz, isDrawingFinished,isDrew, draw, initiateDrawMachine, drewList, updateDrewList] = useDrawMachine();
    
    const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer);
   
    // 퀴즈별 정답자 데이터 가져오기
    useEffect(async ()=>{
        const quizData = await dbService.collection('quiz').orderBy('no').get();
        const dbQuizs = quizData.docs.map(doc => doc.data());
        setQuizNos(dbQuizs.map(q => q.no).sort());
        
        let correctorInfos =[];
        await Promise.all( dbQuizs.map( async (quiz) => {
            const {no, answer} = quiz;
            const participantsObj = (await dbService.collection("quiz_"+no).get())
                                    .docs.map( doc => doc.data());
            correctorInfos=[...correctorInfos, participantsObj.filter( p => isCorrectAnswer( p.answer, answer ))];
        }))
        setQuizCorrectorInfos(correctorInfos);
        setInit(true)
    },[])
    const hideName = name => {
        if(name =="" || !name)
            return "익명"
        else if(name.length ==1)
            return name
        else if(name.length==2)
            return name[0]+'*';
        else if(name.length==3)
            return name[0]+'*'+name[2];
        else
            return name[0]+'**'+name[name.length-1];
    }
    const hideTel = tel => {
        if(tel =="" || !tel)
            return "-"
        else if(tel.length <=4)
            return tel
        else
            return '***-****-'+tel.slice(-4);
    }

    const TabPanel = ({ children, value, index, ...other }) => {
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value == index && children }
          </div>
        );
    }
    const a11yProps = index =>({
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
      })
     
    const GetTable = ({title, content, onBlankAltText}) => (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
            { content.length ?
                    <>
                    <TableHead>
                        <TableRow>
                            {
                                title.map( (t, idx) => <TableCell key={idx} align="center"> {t} </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {content.map((row, idx) => (
                            <TableRow key={idx}>
                                { row.map( (c, idx) => (
                                        <TableCell key={idx} component="th" scope="row" align="center">{c}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    </>
                :
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{onBlankAltText}</TableCell>
                        </TableRow>
                    </TableBody>
                }
            </Table>
        </TableContainer>
    )
    const GetPeopleInfoComponent = ({peopleInfo}) => {
        const title = ["이름", "전화번호"];
        const content = peopleInfo.map( p => [p.name, hideTel(p.tel)]);
        return GetTable({
            title, 
            content, 
            onBlankAltText:"정답자가 없습니다 ㅠㅠㅠㅠ"});  
    }

    return (
        <Grid container direction="row" spacing={2} alignItems="flex-start">
            <Grid container item xs={12} md={6} spacing={1}>
                <Grid item xs={12}>
                {
                    init ? 
                    <>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={currentDrawQuiz}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs">
                            {
                                quizNos.map( (no, idx) => 
                                    <Tab key={idx} label={`Quiz ${no}`}  {...a11yProps(idx)} />
                                )
                            }
                        </Tabs>
                    </AppBar>
                    {
                        quizNos.map((no, idx) => (
                            <TabPanel key={idx} value={currentDrawQuiz} index={idx}>
                                <GetPeopleInfoComponent peopleInfo={quizCorrectorInfos[idx]}/>
                            </TabPanel>
                        ))
                    }
                    </>
                    : "정답자 데이터를 가져오는 중입니다..."
                }
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="christmas-striped top"/>
                <div className="draw">
                    <div className="draw-machine">
                        <Paper className="drawer" variant="elevation" elevation={3}>
                            {currentDrawer}
                        </Paper>
                        <div className="draw-btns">
                            { isDrew  ?
                                <Button 
                                    onClick={draw} 
                                    variant="contained" 
                                    color="secondary"
                                    disabled={!isDrawingFinished}
                                    >
                                    <IoRefresh size="18"/>
                                </Button>
                                :
                                <Button/>
                                }
                            {isDrew ?
                                <Button 
                                    onClick={()=>{
                                        currentDrawQuiz<(quizNos.length-1) && initiateDrawMachine(currentDrawQuiz+1);
                                        updateDrewList(currentDrawQuiz+1, currentDrawer);
                                    }} 
                                    variant="contained" 
                                    disabled={!isDrawingFinished}
                                    color="primary">
                                    {currentDrawQuiz<quizNos.length-1 ? "다음 추첨" : "확인"}
                                </Button>
                            :
                                <Button onClick={draw} variant="contained" color="primary">
                                    추첨
                                </Button>
                            }
                        </div>
                    </div>
                    <div className="congrats-message">
                        <h2 align="center">{isDrawingFinished && `${currentDrawer}님, 당첨을 축하드립니다!`}</h2>
                    </div>
                    <div className="drawed-list">
                        <GetTable 
                            title={["퀴즈", "당첨자"]}
                            content={drewList}
                            onBlankAltText="첫 당첨자를 곧 추첨합니다!"
                            />
                    </div>
                </div>
                <div className="christmas-striped bottom"/>
            </Grid>
        </Grid>
    )
}

export default Draw;