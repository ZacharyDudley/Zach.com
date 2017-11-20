import React from 'react'

const Portfolio = () => {

  return (
    <div className="contentBox">
      <div className="section">
        <h2>Domination | <small><a href="https://github.com/the-capstones/domination">GitHub Repository</a></small></h2>
        <p>An in-browser recreation of the classic board game Risk with multiplayer (player v player) or single player (player v AI) capabilities.</p>
        <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>Bento's Bazaar | <small><a href="https://bentos-bazaar.herokuapp.com/">bentos-bazaar.herokuapp.com</a></small></h2>
          <p>A speculative e-commerce site specializing in pet supplies</p>
          <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>Walker Talker | <small><a href="https://github.com/ZacharyDudley/walk-and-talk-2">Git Repository</a></small></h2>
          <p>A walkie-talkie that streams real-time audio over the internet</p>
          <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>Zach.com | <small><a href="/">this</a></small></h2>
          <p>This website</p>
          <p>ROLE: Developer</p>
      </div>
    </div>
  )
}

export default Portfolio
