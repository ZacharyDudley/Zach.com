import React from 'react'

const Resume = () => {
  return (
    <div className="contentBox">
      <div className="section">
        <h2>SKILLS</h2>
          <div className="section-item">
            <h3>Proficient:</h3>
              <p>JavaScript, Node, React, Redux, HTML, CSS, Sass, Git, Agile, Unity3D</p>
          </div>

          <div className="section-item">
            <h3>Knowledgable:</h3>
              <p>Express, Socket.io, Websocket, React Native, Webpack, Gulp, Jest, Jasmine, PostgreSQL, SQL, Firebase, C#, Adobe Creative Suite, Adobe Experience Manager, Blender, Inkscape, Pro Tools</p>
          </div>

          <div className="section-item">
            <h3>Some experience:</h3>
              <p>Bootstrap, Bluebird, Mocha, Chai, jQuery, Heroku, Lua, Ruby, Xcode</p>
          </div>
      </div>

      <div className="section">
        <h2>EXPERIENCE</h2>
          <div className="section-item">
            <h3>Front End Developer | <small>Hyatt Hotels Corporation</small></h3>
              <h4>2018</h4>
              <p>Creating and optimising front end assets</p>
          </div>

          <div className="section-item">
            <h3>Freelance Developer | <small>Team ETHERNAUTS</small></h3>
              <h4>2018</h4>
              <p>Contributed front-end code to the blockchain game ETHERNAUTS</p>
          </div>

          <div className="section-item">
            <h3>Designer | <small>Forever Interactive</small></h3>
              <h4>2017</h4>
              <p>Designed and refined mechanics for the game Visions of Zosimos</p>
          </div>

          <div className="section-item">
            <h3>QA Tester | <small>iBeta Quality Assurance</small></h3>
              <h4>2011</h4>
              <p>Worked with a team to test pre-release consumer software</p>
          </div>
      </div>

      <div className="section">
        <h2>EDUCATION</h2>
          <div className="section-item">
            <h3>Fullstack Academy of Code | <small>Chicago, IL</small></h3>
              <h4>2017</h4>
              <p>Software Engineering Immersive</p>
          </div>

          <div className="section-item">
            <h3>Milwaukee Area Technical College | <small>Milwaukee, WI</small></h3>
              <h4>2014 - 2017</h4>
              <p>Associate of Applied Science: Computer Simulation and Gaming</p>
          </div>

          <div className="section-item">
            <h3>University of Akron | <small>Akron, OH</small></h3>
              <h4>2012</h4>
              <p>Courses towards Masters in English</p>
          </div>

          <div className="section-item">
            <h3>Miami University | <small>Oxford, OH</small></h3>
              <h4>2004 - 2008</h4>
              <p>Bachelor of Arts: Philosophy</p>
          </div>

      </div>

    </div>
  )
}

export default Resume
