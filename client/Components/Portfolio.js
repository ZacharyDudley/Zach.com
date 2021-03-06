import React from 'react';
import { PortfolioProject } from '../components';

const Portfolio = () => {
  const projects = [
    {
      id: 'project-5',
      name: 'extension command',
      link: 'https://github.com/ZacharyDudley/ChromeExtensionManager',
      description: 'A Chrome extension for managing Chrome extensions.',
      role: 'Developer'
    }, {
      id: 'project-4',
      name: 'tetris',
      link: 'https://github.com/ZacharyDudley/tetris-app',
      description: 'A tetris game built for mobile.',
      role: 'Developer',
      screenShots: [
        '/screenShots/tetris/tetrisMenu.png',
        '/screenShots/tetris/tetrisGameplay.png',
        '/screenShots/tetris/tetrisGameplay2.png',
        '/screenShots/tetris/tetrisGameover.png',
        '/screenShots/tetris/tetrisContinue.png',
        '/screenShots/tetris/tetrisCredits.png'
      ]
    }, {
      id: 'project-3',
      name: 'chessball',
      link: 'https://github.com/ZacharyDudley/chessball',
      description: 'Work-In-Progress: A two player turn-based game combining mechanics of Chess and Soccer.',
      role: 'Developer'
    }, {
      id: 'project-2',
      name: 'domination',
      link: 'https://domination-squad.herokuapp.com/',
      description: 'An in-browser recreation of the classic board game Risk with multiplayer (player v player) or single player (player v AI) capabilities.',
      role: 'Programmed battle logic and designed GUIs',
      screenShots: [
        '/screenShots/domination/dominationGameBoard.png',
        '/screenShots/domination/dominationTutorial.png',
        '/screenShots/domination/dominationNewGame.png',
        '/screenShots/domination/dominationLobby.png'
      ]
    }, {
      id: 'project-1',
      name: 'bento\'s bazaar',
      link: 'https://bentos-bazaar.herokuapp.com/',
      description: 'A speculative e-commerce site specializing in pet supplies',
      role: 'Developed page layouts',
      screenShots: [
        '/screenShots/bento/bentoProducts.png',
        '/screenShots/bento/bentoCollar.png',
        '/screenShots/bento/bentoCart.png'
      ]
    }, {
      id: 'project-0',
      name: 'walker talker',
      link: 'https://github.com/ZacharyDudley/walk-and-talk-2',
      description: 'An experiment in streaming real-time audio over the internet',
      role: 'Developer'
    }
  ];

//   return (
//     <div className="content portfolio">
//       {
//         projects && projects.map(project => {
//           return (
//             <div key={project.name} className="section">
//               <h2 className="title">{project.name}</h2>
//               <small>
//                 <a href={project.link}>Link</a>
//               </small>
//               <p>{project.description}</p>
//               <p>{project.role}</p>
//               <div className="gallery">
//                 {
//                   project.screenShots && project.screenShots.forEach(picture => {
//                     return (
//                       <img src={picture} />
//                     )
//                   })
//                 }
//               </div>
//             </div>
//           )
//         })

//         //   <div className="videoBox">
//         //     <iframe width="560" height="315" src="https://www.youtube.com/embed/51-RLBMWXgQ?rel=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
//         //   </div>
//     }
//   </div>
//   );
// };

  return (
    <div className="content portfolio">
      {
        projects && projects.map(project => {
          return (
            <PortfolioProject key={project.id} thisProject={project} />
          )
        })
      }
    </div>
  );
};

export default Portfolio;
