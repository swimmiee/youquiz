import React, { useState, useEffect } from 'react';
import { authService } from '../fbase';
import AppRouter from './Router'

function App() {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
      authService.onAuthStateChanged( u => {
        if(u){
            setUser(u);
        }
        setInit(true);
      })
    }, [])
    
  return (
    <>
      { init ? <AppRouter isLoggedIn={Boolean(user)} user={user}/> : "로딩중입니다!" }
    </>
  );
}

export default App;
