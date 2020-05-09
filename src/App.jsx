import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './style/App.css'
import WelcomePage from './components/WelcomePage'
import MainPage from './components/MainPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route exact path="/main" component={MainPage}></Route>
    </Switch>
  );
}

export default App;
