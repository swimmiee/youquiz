import React, { useState, useEffect } from 'react';
import { firebaseInstance, authService } from '../fbase';
import './css/Auth.css';
import { Grid, Button } from '@material-ui/core';
import { IoLogoGoogle} from 'react-icons/io5'

const Auth = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [available, setAvailable] = useState(true);

    const onGooleClick = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        setButtonClicked(true)
        await authService.signInWithPopup(provider);
    }

    useEffect(()=>{
        const is_chrome = ((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) &&(navigator.vendor.toLowerCase().indexOf("google") > -1));
        const is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
        const avail = is_chrome || is_safari;
        if(!avail)
            alert(`현재 브라우저에서는 지원하지 않는 서비스입니다. 화면에 보이는 주소를 복사하셔서 구글 Chrome나 Safari앱을 통해 접속해 주시기 바랍니다.`);
        setAvailable(avail);
    }, [])
    

    const copyURL = () => {
        const tempElem = document.createElement('textarea');
        tempElem.value = "dannylisa.github.io/youquiz/";  
        document.body.appendChild(tempElem);
        tempElem.select();
        document.execCommand("copy");
        document.body.removeChild(tempElem);
        alert('URL이 복사되었습니다.');
    }
    
    return (
    <>
    <Grid id="auth-button" container direction="row" spacing={1} alignItems="center">
        {/* <Grid item xs={12}>
            <img src='../img/logo.jpeg' alt="Love Came Down"/>
        </Grid> */}
        <Grid item xs={12}>
            <Button 
                variant="outlined" 
                onClick={onGooleClick} 
                disabled={!available}
                fullWidth> 
                <IoLogoGoogle/> &nbsp; 구글아이디로 로그인
            </Button>
        </Grid>
        {
            !available &&
            <>
                <Grid item xs={12}>
                    <h4>현재 브라우저에서는 지원하지 않는 서비스입니다.</h4>
                    <h4>Google Chrome이나 Safari 앱을 통해 접속해 주시기 바랍니다.</h4>
                    <h4>아래 버튼을 클릭하면 자동으로 URL이 클립보드에 복사됩니다.</h4>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="primary" 
                        variant="contained"
                        onClick={copyURL}
                        fullWidth>
                        복사
                    </Button>
                </Grid>
            </>
        }
        { buttonClicked &&
            <Grid item xs={12}>
                <h5>잠시 기다려주세요...</h5>
            </Grid>
        }
    </Grid>
    </>
    )
}

export default Auth