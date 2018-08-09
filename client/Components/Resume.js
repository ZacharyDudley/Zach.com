import React from 'react';

const Resume = () => {
  const skills = [
    {
      id: 0,
      name: 'proficient',
      tech: 'JavaScript, Node, React, Redux, HTML, CSS, Sass, Git, Agile, Unity3D'
    }, {
      id: 1,
      name: 'knowledgable',
      tech: 'Express, Socket.io, Websocket, React Native, Webpack, Gulp, Jest, Jasmine, PostgreSQL, SQL, Firebase, C#, Adobe Creative Suite, Adobe Experience Manager, Blender, Inkscape, Pro Tools'
    }, {
      id: 2,
      name: 'some experience',
      tech: 'Bootstrap, Bluebird, Mocha, Chai, jQuery, Heroku, Lua, Ruby, Xcode'
    }
  ];

  const experience = [
    {
      id: 0,
      title: 'Front End Developer',
      company: 'Hyatt Hotels Corporation',
      date: '2018',
      description: 'Creating and optimising front end assets'
    }, {
      id: 1,
      title: 'Freelance Developer',
      company: 'TEAM ETHERNAUTS',
      date: '2018',
      description: 'Contributed front-end code to the blockchain game ETHERNAUTS'
    }, {
      id: 2,
      title: 'Designer',
      company: 'Forever Interactive',
      date: '2017',
      description: 'Designed and refined mechanics for the game Visions of Zosimos'
    }, {
      id: 3,
      title: 'QA Tester',
      company: 'iBeta Quality Assurance',
      date: '2011',
      description: 'Worked with a team to test pre-release consumer software'
    }
  ];

  const education = [
    {
      id: 0,
      name: 'Fullstack Academy of Code',
      location: 'Chicago, IL',
      date: '2017',
      degree: 'Software Engineering Immersive'
    }, {
      id: 1,
      name: 'Milwaukee Area Technical College',
      location: 'Milwaukee, WI',
      date: '2014 - 2017',
      degree: 'Associate of Applied Science: Computer Simulation and Gaming'
    },
    {
      id: 2,
      name: 'University of Akron',
      location: 'Akron, OH',
      date: '2012',
      degree: 'Courses towards Masters in English'
    },
    {
      id: 3,
      name: 'Miami Univeristy',
      location: 'Oxford, OH',
      date: '2004 - 2008',
      degree: 'Bachelor of Arts: Philosophy'
    },
  ];

  return (
    <div className="contentBox resume">
      <div className="section">
        <h2 className="title">Skills</h2>
        {
          skills && skills.map(section => {
            return (
              <div key={`skills-${section.id}`}>
                <h3 className="subtitle">{section.name}</h3>
                <p>{section.tech}</p>
              </div>
            )
          })
        }
      </div>

      <div className="section">
        <h2 className="title">Experience</h2>
        {
          experience && experience.map(section => {
            return (
              <div key={`experience-${section.id}`}>
                <h3 className="subtitle">{section.title}</h3>
                <h3 className="subtitle"><small>{section.company}</small></h3>
                <p>{section.date}</p>
                <p>{section.description}</p>
              </div>
            )
          })
        }
      </div>

      <div className="section">
        <h2 className="title">Education</h2>
        {
          education && education.map(section => {
            return (
              <div key={`education-${section.id}`}>
                <h3 className="subtitle">{section.name}</h3>
                <p>{section.date} | {section.location}</p>
                <p>{section.degree}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Resume;
