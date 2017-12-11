import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  let i = 0

  const changeColor = () => {
    const sideMenu = document.getElementById('sideMenu')
    const mainBackground = document.getElementById('mainBox')
    const sectionBackground = document.getElementsByClassName('section')

    const themes = [
      // ['color-name', 'background', 'menu']
      ['blue-grey', '#68B7B7', '#91C4C4'],
      ['orange-red', '#8E5744', '#CCBFBB'],
      ['blue', '#87CDFF', '#ADD7F6', '#3FADFC', '#2888CC']
    ]

    if (i > themes.length - 1) {
      i = 0
    }

    mainBackground.style.backgroundColor = themes[i][1]
    sideMenu.style.backgroundColor = themes[i][2]
    Array.prototype.filter.call(sectionBackground, element => {
      element.style.backgroundColor = themes[i][2]
    })

  // sectionBackground.style.backgroundColor = themes[i][2]
    i++
  }

  return (

    <div id="sideMenu">
      <div id="sideMenu-name" onClick={changeColor}>
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
