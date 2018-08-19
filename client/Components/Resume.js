import React from 'react';

const Resume = () => {
  const skills = [
    {
      id: 2,
      name: 'proficient',
      tech: 'JavaScript, Node, React, Redux, HTML, CSS, Sass, Git, Agile, Unity3D'
    }, {
      id: 1,
      name: 'knowledgable',
      tech: 'Express, Socket.io, Websocket, React Native, Webpack, Gulp, Jest, Jasmine, PostgreSQL, SQL, Firebase, C#, Adobe Creative Suite, Adobe Experience Manager, Blender, Inkscape, Pro Tools'
    }, {
      id: 0,
      name: 'some experience',
      tech: 'Bootstrap, Bluebird, Mocha, Chai, jQuery, Heroku, Lua, Ruby, Xcode'
    }
  ];

  const experience = [
    {
      id: 3,
      title: 'Front End Developer',
      company: 'Hyatt Hotels Corporation',
      date: '2018',
      description: 'Creating and optimising front end assets'
    }, {
      id: 2,
      title: 'Freelance Developer',
      company: 'TEAM ETHERNAUTS',
      date: '2018',
      description: 'Contributed front-end code to the blockchain game ETHERNAUTS'
    }, {
      id: 1,
      title: 'Designer',
      company: 'Forever Interactive',
      date: '2017',
      description: 'Designed and refined mechanics for the game Visions of Zosimos'
    }, {
      id: 0,
      title: 'QA Tester',
      company: 'iBeta Quality Assurance',
      date: '2011',
      description: 'Worked with a team to test pre-release consumer software'
    }
  ];

  const education = [
    {
      id: 3,
      name: 'Fullstack Academy of Code',
      location: 'Chicago, IL',
      date: '2017',
      degree: 'Software Engineering Immersive'
    }, {
      id: 2,
      name: 'Milwaukee Area Technical College',
      location: 'Milwaukee, WI',
      date: '2014 - 2017',
      degree: 'Associate of Applied Science: Computer Simulation and Gaming'
    }, {
      id: 1,
      name: 'University of Akron',
      location: 'Akron, OH',
      date: '2012',
      degree: 'Courses towards Masters in English'
    }, {
      id: 0,
      name: 'Miami Univeristy',
      location: 'Oxford, OH',
      date: '2004 - 2008',
      degree: 'Bachelor of Arts: Philosophy'
    }
  ];

  return (
    <div className="content resume">
      <div className="section">
        <h2 className="section-title">Skills</h2>
        <div className="section-body">
          {
            skills && skills.map(section => {
              return (
                <div key={`skills-${section.id}`} className="subsection">
                  <h3 className="subsection-title">{section.name}</h3>
                  <p>{section.tech}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Experience</h2>
        <div className="section-body">
          {
            experience && experience.map(section => {
              return (
                <div key={`experience-${section.id}`} className="subsection">
                  <h3 className="subsection-title">{section.title}</h3>
                  <div className="subsection-body">
                    <div className="subsection-body_headline">
                      <p className="subsection-body_headline__place">{section.company}</p>
                      <p className="subsection-body_headline__date">{section.date}</p>
                    </div>
                    <p className="subsection-body_text">{section.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Education</h2>
        <div className="section-body">
          {
            education && education.map(section => {
              return (
                <div key={`education-${section.id}`} className="subsection">
                  <h3 className="subsection-title">{section.name}</h3>
                  <div className="subsection-body">
                    <div className="subsection-body_headline">
                      <p className="subsection-body_headline__place">{section.location}</p>
                      <p className="subsection-body_headline__date">{section.date}</p>
                    </div>
                    <p className="subsection-body_text">{section.degree}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Resume;
