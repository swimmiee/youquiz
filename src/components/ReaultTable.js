import React, { useEffect, useState } from 'react';
import GetTable from './GetTable';
import { dbService } from '../fbase';
import Navtab from './Navtab';

const ResultTable = ({tabIdx, tabController}) => {
    const [correctorWinner, setCorrectorWinner] = useState([]);
    const [participantWinner, setParticipantWinner] = useState([]);
    useEffect(async ()=>{
        dbService.collection('current').doc('corrector').onSnapshot( snapshot => {
            const winners = snapshot.data();
            setCorrectorWinner( winners ? Object.entries(winners).map( ([idx, infoArr]) => [idx, infoArr[0]]) : []);
        })
        dbService.collection('current').doc('participant').onSnapshot( snapshot => {
            const winners = snapshot.data();
            setParticipantWinner( winners ? Object.entries(winners).map( ([idx, infoArr]) => [idx, infoArr[0]]) : []);
        })
    },[])
    
    return(
        <Navtab 
            tabnames={["정답자 6인","참여자 10인"]}
            tabIdx={tabIdx || null}
            tabController={tabController || null}>
            <GetTable 
                title={["퀴즈", "당첨자"]}
                content={correctorWinner}
                onBlankAltText="당첨자를 곧 추첨합니다!"
                />
            <GetTable 
                title={["번호", "당첨자"]}
                content={participantWinner}
                onBlankAltText="참여자 중 10명을 추첨합니다!"
                />
        </Navtab>
    )
}

export default ResultTable;