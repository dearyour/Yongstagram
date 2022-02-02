import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Login from './Login/Login';
import Join from './Join/Join';
import MainFeed from './MainFeed/MainFeed';
import Header from './Header/Header';
import Detail from './Detail/Detail';
import firebaseApp from '@config/firebaseApp';

const Fdatabase = firebaseApp.database();

function App() {
  const __getNicknames = useCallback(() => {
    const nicknameRef = Fdatabase.ref('statics/nicknames');

    nicknameRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        //데이터가 존재할때는 리덕스 상태로 닉네임리스트를 업데이트
      } else {
        //데이터가 없을때는 빈 배열을 업데이트
      }
    });

    return nicknameRef;
  }, []);

  useEffect(() => {
    const nicknameRef = __getNicknames();
    return () => {
      nicknameRef.off();
    };
  }, [__getNicknames]);

  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" exact component={Join} />
        <Route path="/feed" exact component={MainFeed} />
      </Switch>
      {/* {true && <Detail />} */}
    </Router>
  );
}

export default App;
