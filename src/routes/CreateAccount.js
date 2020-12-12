import React, {useState} from  'react';
import { Grid, Input, FormControl, InputLabel, Button, Snackbar, Box} from '@material-ui/core';
import { dbService, firebaseInstance } from '../fbase';
import {useHistory} from 'react-router-dom';

const CreateAccount = ({user}) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [agreed, setAgreed] = useState(false);
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
        await dbService.collection('current').doc('current').update({
            users: firebaseInstance.firestore.FieldValue.increment(1)
        })
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
                    <Button 
                        onClick={onAddUserInfoClicked} 
                        variant="contained" 
                        color="primary"
                        disabled={!name || !tel || !agreed}>확인</Button>
                </Grid>
                <Grid item xs={12}>
                    <Box id="info-agree" component="div" my={2}>
                        □ 개인정보 수집 동의서 <br/>
                        ○ 본 행사의 원활한 진행을 위하여 개인정보를 아래와 같이 수집하고 있습니다. <br/>
                        &emsp; - 이름, 휴대전화번호, Google 계정 <br/>
                        □ 개인정보 수집 방법 <br/>
                        ○ 아래 "개인정보 수집에 동의합니다"버튼을 누르면 개인정보 수집 및 이용에 동의하는 것으로 간주됩니다. <br/>
                        ○ 이후 "개인정보 수집에 동의하지 않습니다"버튼을 눌러 개인정보 수집 동의를 취소할 수 있습니다. <br/>
                        □ 개인정보의 보유 및 이용기간 <br/>
                        ○ 본 개인정보는 퀴즈쇼 후 추첨에 따른 선물 발송을 위한 것이므로, 퀴즈쇼 종료 후 당첨자 추첨 및 경품 발송과 관련하여 이용됩니다. <br/>
                        ○ 본 웹페이지에 연동된 구글 계정은 퀴즈쇼 당일 삭제됩니다. <br/>
                        ○ 본 개인정보의 보유기간은 미당첨자는 퀴즈쇼 당일(12/20), 당첨자는 선물 발송 시까지입니다. <br/>
                        <br/>
                        <b> ※ 동의를 거부하시는 경우 퀴즈쇼 참여가 불가합니다.</b> <br/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        fullWidth 
                        variant="contained" 
                        color= {agreed ? "secondary" : "primary"}
                        onClick={()=>setAgreed(prev=>!prev)}>
                        { agreed ? "개인정보 수집에 동의하지 않습니다." : "개인정보 수집에 동의합니다."}
                    </Button>
                </Grid>
            </Grid>
        </form>
        }
        </>
    )  
}

export default CreateAccount;