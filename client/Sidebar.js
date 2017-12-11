import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  let i = 0

  const changeColor = () => {
    const mainBackground = document.getElementById('mainBox')

    const themes = [
      'blue', 'grey', 'red'
    ]

    if (i > themes.length - 1) {
      i = 0
    }

    mainBackground.classList.remove(...themes)
    mainBackground.classList.add(themes[i])

    // mainBackground.style.backgroundColor = themes[i][1]
    // sideMenu.style.backgroundColor = themes[i][2]
    // Array.prototype.filter.call(sectionBackground, element => {
    //   element.style.backgroundColor = themes[i][2]
    // })

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
