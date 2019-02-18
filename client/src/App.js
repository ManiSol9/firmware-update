import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/main';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;

