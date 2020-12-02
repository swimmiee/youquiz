import React, { useState, useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import './css/Draw.css';
import { dbService } from '../fbase';

const Draw = () => {
    const [participant, setParticipant] = useState([]);
    const [correcter, setCorrecter] = useState([]);
    useEffect(async ()=>{
        const usersCollection = await dbService.collection('userinfo').get();
        const usersData = usersCollection.docs.map(doc => doc.data()).filter((u, idx)=> idx<15);
        setParticipant(usersData);
    },[])
    const hideName = name => {
        if(name.length <=1)
            return name
        else if(name.length==2)
            return name[0]+'*';
        else if(name.length==3)
            return name[0]+'*'+name[2];
        else
            return name[0]+'**'+name[name.length-1];
    }
    const hideTel = tel => {
        if(tel.length <=4)
            return tel
        else
            return '***-****-'+tel.slice(-4);
    }

    const GetPeopleInfoComponent = ({peopleInfo}) => (
        <Paper className="people" variant="elevation" elevation={3}>
            <Grid container direction="row" spacing={1}>
                {peopleInfo.map( (p, idx) => {
                    const {name, tel} = p;
                    return (
                        <Grid key={idx} item xs={12}>
                            <Paper variant="elevation" elevation={1}>
                                <Grid container>
                                    <Grid item xs={5}> {hideName(name)} </Grid>
                                    <Grid item xs={7}> {hideTel(tel)} </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
    return (
        <Grid container direction="row" spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
                <GetPeopleInfoComponent peopleInfo={participant}/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className="draw" variant="elevation" elevation={3}>
                    추첨
                </Paper>
            </Grid>
        </Grid>
        
    )
}

export default Draw;