import React, {useState} from  'react';
import { Grid, Input, FormControl, InputLabel, Button, Snackbar} from '@material-ui/core';
import { dbService } from '../fbase';
import {useHistory} from 'react-router-dom';

const CreateAccount = ({user}) => {
    const [name, setName] = useState(user.displayName);
    const [tel, setTel] = useState(user.phoneNumber || '');
    const [created, setCreated] = useState(false);
    const history = useHistory();

    const onInputChange = (event) => {
        const {target: {name, value}} = event;
        if(name==="name")
            setName(value);
        else if(name==="tel")
            setTel(value.replace('-','') );
    }
    const onAddUserInfoClicked = async () => {
        await dbService.collection('userinfo').add({
            uid: user.uid,
            name,
            tel,
            isAdmin: false
        });
        alert('가입이 완료되었습니다.');
        setCreated(true);
        history.go(0);
    }

    return (
        <>
        { created ? 
            <Snackbar
            anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
            open={true}
            autoHideDuration={6000}
            message="새로고침하면 퀴즈 페이지로 이동됩니다."
        />
        :
            <form id="auth-form">
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <h2> 이름과 전화번호를 입력해주세요. 이 정보는 추첨을 통해 선물을 보내드리기 위한 정보로, 꼭 입력하지 않아도 됩니다.  </h2>
                </Grid>
                <Grid item xs={12} md={5}>
                    <FormControl>
                        <InputLabel htmlFor="name-input">이름</InputLabel>
                        <Input id="name-input" type="text" aria-describedby="name-helper" name="name" onChange={onInputChange} value={name}/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={5}>
                    <FormControl>
                        <InputLabel htmlFor="tel-input">전화번호</InputLabel>
                        <Input id="tel-input" type="tel" aria-describedby="tel-helper" name="tel" onChange={onInputChange} value={tel}/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button onClick={onAddUserInfoClicked} variant="contained" color="primary">확인</Button>
                </Grid>
            </Grid>
        </form>
        }
        </>
    )  
}

export default CreateAccount;