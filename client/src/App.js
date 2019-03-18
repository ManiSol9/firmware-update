import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/main';
import RunCommand from './components/runCommand/runCommand';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cmdExecution" component={RunCommand} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

