import React from 'react'

const Portfolio = () => {

  return (
    <div className="contentBox">
      <div className="section">
        <h2>Tetris | <small><a href="https://github.com/ZacharyDudley/tetris-app">git repository</a></small></h2>
        <p>A tetris game built for mobile.</p>
        <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>ChessBall | <small><a href="https://github.com/ZacharyDudley/chessball">git repository</a></small></h2>
        <p>A two player turn-based game combining mechanics of Chess and Soccer.</p>
        <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>Domination | <small><a href="https://domination-squad.herokuapp.com/">domination-squad.herokuapp.com</a></small></h2>
        <p>An in-browser recreation of the classic board game Risk with multiplayer (player v player) or single player (player v AI) capabilities.</p>
        <p>ROLE: Designed GUIs</p>

        <div className="pictureBox">
          <img src="/screenShots/domination/dominationGameBoard.png" alt="Game board" />
          <img src="/screenShots/domination/dominationTutorial.png" alt="Tutorial" />
          <img src="/screenShots/domination/dominationNewGame.png" alt="Creating game" />
          <img src="/screenShots/domination/dominationLobby.png" alt="Joining game" />
        </div>

        <div className="videoBox">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/51-RLBMWXgQ?rel=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        </div>

      </div>

      <div className="section">
        <h2>Bento's Bazaar | <small><a href="https://bentos-bazaar.herokuapp.com/">bentos-bazaar.herokuapp.com</a></small></h2>
          <p>A speculative e-commerce site specializing in pet supplies</p>
          <p>ROLE: Developed page layouts</p>

          <div className="pictureBox">
            <img src="/screenShots/bento/bentoProducts.png" alt="All products" />
            <img src="/screenShots/bento/bentoCollar.png" alt="Product page" />
            <img src="/screenShots/bento/bentoCart.png" alt="Cart" />
        </div>

      </div>

      <div className="section">
        <h2>Walker Talker | <small><a href="https://github.com/ZacharyDudley/walk-and-talk-2">git repository</a></small></h2>
          <p>An attempt to create walkie-talkie that streams real-time audio over the internet</p>
          <p>ROLE: Developer</p>
      </div>

      <div className="section">
        <h2>ZacharyDFriedman.herokuapp.com | <small><a href="/">here</a></small></h2>
          <p>This website</p>
          <p>ROLE: Developer</p>
      </div>
    </div>
  )
}

export default Portfolio
