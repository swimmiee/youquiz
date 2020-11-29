import React, { useState } from 'react';
import { firebaseInstance, authService } from '../fbase';
import './css/Auth.css';
import { Grid, Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core';
import { IoLogoGoogle, IoLogoApple } from 'react-icons/io5'

const Auth = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(true);
    const onInputChange = (event) => {
        const {target: {name, value}} = event;
        if(name==="phone")
            setPhone(value);
        else if(name==="password")
            setPassword(value);
    }
    const toggleCreatingAccount = () => setIsCreatingAccount( prev => !prev );
    const onGooleClick = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
    }

    return (
    <>
    <form id="auth-form">
        <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item xs={12}>
                <Button onClick={toggleCreatingAccount} >
                    <u> {isCreatingAccount ? "이미 계정이 있으신가요?" : "계정을 새로 만드시겠어요?"} </u>
                </Button>
            </Grid>
            <Grid item xs={12} md={5}>
                <FormControl>
                    <InputLabel htmlFor="phone-input">전화번호</InputLabel>
                    <Input id="phone-input" type="tel" aria-describedby="phone-helper" name="phone" onChange={onInputChange} value={phone}/>
                    {/* <FormHelperText id="phone-helper"></FormHelperText> */}
                </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
                <FormControl>
                    <InputLabel htmlFor="password-input">비밀번호</InputLabel>
                    <Input id="password-input" aria-describedby="password-helper" name="password" onChange={onInputChange} value={password}/>
                    {/* <FormHelperText id="password-helper">We'll never share your password.</FormHelperText> */}
                </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
                {
                    isCreatingAccount ?
                        <Button variant="contained" color="secondary"> 회원가입</Button>
                    :
                        <Button variant="contained" color="primary">로그인</Button>
                }
            </Grid>
        </Grid>
        <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
                <Button variant="outlined" onClick={onGooleClick}> <IoLogoGoogle/> &nbsp; 구글아이디로 로그인</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button variant="outlined"> <IoLogoApple/> &nbsp; 애플아이디로 로그인</Button>
            </Grid>
        </Grid>
    </form>
    </>
    )
}

export default Auth