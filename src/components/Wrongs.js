import React from 'react';
import { Paper, Grid, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import {dbService} from '../fbase';

const Wrongs = ({wrongs, isAdmin, showWrongs}) => {
    const toggleShowWrongs = () => {
        dbService.collection('current').doc('current').update({
            showWrongs: !showWrongs
        })
    }
    return (
        <>
        <div className="christmas-striped top"/>
        <div id="wrongs">
            <Grid container direction="column" spacing={1}>
                <Grid item container direction="row">
                    <Grid item xs={6}>
                        <h3>오답 {wrongs.length} </h3>
                    </Grid>
                    {isAdmin && <Grid item xs={6}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={showWrongs} onChange={toggleShowWrongs} name="showWrongs" />}
                                label={showWrongs ? "오답 숨기기" : "오답 보기"}
                            />
                        </FormGroup>
                    </Grid>}
                </Grid>
                {showWrongs ? wrongs.map( (w, idx) => (
                    <Grid item key={idx} >
                        <Paper className="wrongs-wrong" variant="elevation" elevation={2}>
                            <h3> {w.answer} </h3>
                        </Paper>
                    </Grid>
                    )) 
                    :<Grid item>
                        <h4 align="center">어떤 오답들이 있을까요?</h4>
                    </Grid>
                }
            </Grid>
        </div>
        <div className="christmas-striped bottom"/>
        </>
    )
}

export default Wrongs;