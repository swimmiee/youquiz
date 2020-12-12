import { rgbToHex } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { IoLogoOctocat, IoCheckmarkCircleSharp } from 'react-icons/io5'

const Gauge = ({score, goal}) => {
    const perc = score / goal;
    const gauge_fill = useRef();
    const gauge_cover = useRef();
    
    const setGaugeValue = (value) => {
        if (value < 0) {
            value=0
        }
        if (value > 1 ) {
            value=1
        }
        const offset = parseInt(55+192*(1-perc));
        gauge_fill.current.style.background=rgbToHex(`rgb(255,${offset},${offset})`);
        gauge_fill.current.style.transform = `rotate(${
            value / 2
        }turn)`;
        gauge_cover.current.textContent = score;
    }
    useEffect(() => {
        setGaugeValue(perc);
    },[score, goal])

    return (
        <div className="gauge">
            <div className="gauge__body">
                <div ref={gauge_fill} className="gauge__fill"></div>
                <div ref={gauge_cover} className="gauge__cover"></div>
            </div>
        </div>
    )
}
const Board = ({participants, corrects, showAnswer, score, goal}) => {
    return(
        <>
        <div className="christmas-striped top slim"/>
        <div id="board">
            <div className="current">
                { participants ?
                    <><IoCheckmarkCircleSharp size="32"/>&nbsp; {participants}분 참여하셨습니다!</>
                    :
                    <><IoLogoOctocat size="32"/>&nbsp; 아직 참여하신 분이 없습니다. 제일 먼저 퀴즈를 풀어보세요! </>
                }
                
            </div>
            <div className="cumulative">
                <Gauge score={score} goal={goal}/>
            </div>
        </div>
        <div className="christmas-striped bottom slim"/>
        
        </>
    )
}

export default Board;