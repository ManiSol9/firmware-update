import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/main/main';
import RunCommand from './components/runCommand/runCommand';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/cmd' component={RunCommand} />
      </Switch>
    );
  }
}
export default App;

