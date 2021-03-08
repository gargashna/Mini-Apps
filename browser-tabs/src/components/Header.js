import React from 'react'
import Tab from './Tab'
import {NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <div className="tabs">
      <Tab> 
        <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>
      </Tab>
      <Tab><NavLink to="/about">About</NavLink> </Tab>
      <Tab><NavLink to="/features">Features</NavLink></Tab>
    </div>
    )
}