import React, { useState, useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { IoPeopleSharp, IoCheckmarkCircleSharp } from 'react-icons/io5'
import { dbService } from '../fbase';
import Quiz from './Quiz';

const Board = ({participants, corrects}) => {
    return(
        <Paper id="board" variant="outlined">
            <Grid container direction="row" spacing={2}>
                <Grid item xs={6}>
                    <div className="board-count">
                        <IoPeopleSharp size="20"/>&nbsp;
                        참여 {participants}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="board-count">
                        <IoCheckmarkCircleSharp size="20"/>&nbsp;
                        정답 {corrects}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Board;