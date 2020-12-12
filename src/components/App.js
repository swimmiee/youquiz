import React, { useState, useEffect } from 'react';
import { authService, dbService } from '../fbase';
import AppRouter from './Router';
import Snow from '../Snow';

function App() {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [docUserId, setDocUserId] = useState('');
  const [currentInfo, setCurrentInfo] = useState({currentQuiz:0, showWrongs:false, showAnswer:false});
  const [goals, setGoals] = useState({users:0, goal:100, score:0});
  
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
      dbService.collection('current').doc('goals').onSnapshot(data => {
        setGoals(data.data())
      });
    }, [])
    useEffect(() => {
      if(!docUserId)
        return;
      dbService.collection('userinfo').doc(docUserId).onSnapshot( newUser => {
        setUser(newUser.data());
      })
    },[docUserId])
    
    
  return (
    <>
    <Snow/>
    { init ? <AppRouter 
      isLoggedIn={Boolean(user)} 
      user={user} 
      hasAccount={hasAccount} 
      doc_user_id={docUserId}
      currentInfo={currentInfo}
      goals={goals} /> : "로딩중입니다!" }
      </>
  );
}

export default App;
