import React, { useState, Children } from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab'

import Header from './components/Header'
import Routes from './components/Routes'


function App() {
 return (
   <Router>
     <div className="App">
      <div className="browser">
      <Header/>
</div>
<div className="viewport">
        <Routes/>
   
      </div>
    </div>

</Router>
    
  );
}

export default App;
