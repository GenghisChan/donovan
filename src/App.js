import React, { Component } from 'react';
import './css/style.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Neighborhoods from './components/Neighborhoods'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/neighborhoods" component={Neighborhoods}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
