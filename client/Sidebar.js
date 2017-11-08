import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div id="sideMenu">
      <div id="sideMenu-name">
        <p>ZACHARY<br /><span>D</span><br /> FRIEDMAN</p>
      </div>

      <div id="sideMenu-nav">
        <NavLink exact to="/">HOME</NavLink>
        <NavLink to="/portfolio">PORTFOLIO</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="/resume">RE&#769;SUME&#769;</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </div>
  )
}

export default Sidebar
