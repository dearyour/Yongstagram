import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@styles/core.css';
import Welcome from './Welcome/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
