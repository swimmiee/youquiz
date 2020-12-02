import React, { useState, useEffect } from 'react';
import { authService, dbService } from '../fbase';
import AppRouter from './Router';
import Snow from '../Snow';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';

function App() {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [docUserId, setDocUserId] = useState('');
  const [currentInfo, setCurrentInfo] = useState({currentQuiz:0, showWrongs:false});
  
  useEffect(() => {
      authService.onAuthStateChanged( async u => {
        if(u){
          const userinfo = await dbService.collection('userinfo').where('uid','==',u.uid).get();
          setHasAccount(Boolean(userinfo.docs.length))
          try{
            setUser(userinfo.docs[0].data());
            setDocUserId(userinfo.docs[0].id);
          }catch(e){
            setUser(u)
          }
        }
        else{
          setUser(null);
        }
        setInit(true);
      });
      dbService.collection('current').doc('current').onSnapshot(data => {
        setCurrentInfo(data.data())
      });
    }, [])
    useEffect(() => {
      if(!docUserId)
        return;
      dbService.collection('userinfo').doc(docUserId).onSnapshot( newUser => {
        setUser(newUser.data());
      })
    },[docUserId])
    
    // const theme = createMuiTheme({
    //   typography: {
    //     fontFamily: 'GoldSilver',
    //     fontSize: 25,
    //     fontWeightRegular: 600
    //   }
    // });
    
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <Snow>
        { init ? <AppRouter 
            isLoggedIn={Boolean(user)} 
            user={user} 
            hasAccount={hasAccount} 
            doc_user_id={docUserId}
            currentInfo={currentInfo} /> : "로딩중입니다!" }
        </Snow>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
