import React from 'react';
import { IoLogoOctocat, IoCheckmarkCircleSharp } from 'react-icons/io5'


const Board = ({participants, corrects}) => {
    return(
        <>
        <div className="christmas-striped top slim"/>
        <div id="board">
            <h4>
                { participants && corrects ?
                    <IoCheckmarkCircleSharp size="28"/>
                    :
                     <IoLogoOctocat size="28"/>
                }
                &nbsp;
                <span>

                {
                    participants == 0 ?
                    "아직 참여하신 분이 없습니다. 제일 먼저 퀴즈를 풀어보세요!"
                    :
                    corrects == 0 ?
                    `참여해주신 ${participants}분 중 아직 정답자가 없습니다! 가장 먼저 정답을 맞혀봐요!`
                    :
                    `참여해주신 ${participants}분 중에서 ${corrects}분이 정답을 맞히셨습니다!`
                }
                </span>
                
            </h4>
        </div>
        <div className="christmas-striped bottom slim"/>
        </>
    )
}

export default Board;