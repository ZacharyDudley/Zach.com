import React from 'react'

const Resume = () => {
  return (
    <div className="contentBox">
      <div className="section">
        <h2>SKILLS</h2>
        <hr />
          <h3>Proficient:</h3>
            <p>JavaScript, Node, React, Redux, HTML, CSS, Git, Agile, Unity3D</p>
          <h3>Knowledgable:</h3>
            <p>Express, Socket.io, Websocket, React Native, Webpack, Jest, Jasmine, PostgreSQL, SQL, Firebase, C#, Adobe Creative Suite, Blender, Inkscape, Pro Tools</p>
          <h3>Some experience:</h3>
            <p>Sass, Bootstrap, Bluebird, Mocha, Chai, jQuery, Heroku, Lua, Ruby, Xcode</p>
      </div>

      <div className="section">
        <h2>EXPERIENCE</h2>
        <hr />
          <h2>Freelance Developer | <small>Team ETHERNAUTS</small></h2>
            <h3>2018</h3>
            <p>Contributed front-end code to the blockchain game ETHERNAUTS</p>

          <h2>Designer | <small>Forever Interactive</small></h2>
            <h3>2017</h3>
            <p>Designed and refined mechanics for the game Visions of Zosimos</p>

          <h2>QA Tester | <small>iBeta Quality Assurance</small></h2>
            <h3>2011</h3>
            <p>Worked with a team to test pre-release consumer software</p>

      </div>

      <div className="section">
        <h2>EDUCATION</h2>
        <hr />
          <h2>Fullstack Academy of Code | <small>Chicago, IL</small></h2>
              <h3>2017</h3>
              <p>Software Engineering Immersive</p>

            <h2>Milwaukee Area Technical College | <small>Milwaukee, WI</small></h2>
              <h3>2014 - 2017</h3>
              <p>Associate of Applied Science: Computer Simulation and Gaming</p>

            <h2>University of Akron | <small>Akron, OH</small></h2>
              <h3>2012</h3>
              <p>Courses towards Masters in English</p>

            <h2>Miami University | <small>Oxford, OH</small></h2>
              <h3>2004 - 2008</h3>
              <p>Bachelor of Arts: Philosophy</p>

      </div>

    </div>
  )
}

export default Resume
