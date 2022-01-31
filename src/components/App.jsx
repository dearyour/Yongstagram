import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
