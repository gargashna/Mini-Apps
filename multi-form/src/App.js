import React from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import SignupForm from './components/SignupForm'

function App () {
  return (
    <Router>
      <div className='App'>
        <SignupForm />
      </div>
    </Router>
  )
}

export default App
