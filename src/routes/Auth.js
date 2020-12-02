import React, { useState } from 'react';
import { firebaseInstance, authService } from '../fbase';
import './css/Auth.css';
import { Grid, Button } from '@material-ui/core';
import { IoLogoGoogle, IoLogoApple } from 'react-icons/io5'

const Auth = () => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const onGooleClick = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        setButtonClicked(true)
        await authService.signInWithPopup(provider);
    }

    return (
    <>
    <Grid id="auth-button" container direction="row" spacing={1} alignItems="center">
        {/* <Grid item xs={12}>
            <img src='../img/logo.jpeg' alt="Love Came Down"/>
        </Grid> */}
        <Grid item xs={12}>
            <Button variant="outlined" onClick={onGooleClick} fullWidth> <IoLogoGoogle/> &nbsp; 구글아이디로 로그인</Button>
        </Grid>
        { buttonClicked &&
            <Grid item xs={12}>
                <h2>잠시 기다려주세요...</h2>
            </Grid>
        }
    </Grid>
    </>
    )
}

export default Auth