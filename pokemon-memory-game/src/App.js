import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.scss'
import shuffle from 'lodash.shuffle'
import PokemonGame from './PokemonGame'
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom'
import DragAndDropGame from './DragAndDropGame'

function App () {
  return (
    <Router>
      <div>
        <NavLink to='/'>
          <span></span>
        </NavLink>
        <NavLink to='/memoryGame'>
          <span>Memory Game</span>
        </NavLink>
        <NavLink to='/dragAndDropGame'>
          <span>Drag And Drop Game</span>
        </NavLink>

        <Switch>
          {/* <Route path='/' exact component={Games} /> */}
          <Route path='/memoryGame' component={PokemonGame} />
          <Route path='/dragAndDropGame' component={DragAndDropGame} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
