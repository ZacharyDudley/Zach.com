import React from 'react';

const PortfolioProject = (props) => {
  const { thisProject } = props;

  return (
    <div key={thisProject.name} className="section">
      <h2 className="section-title">{thisProject.name}</h2>
      <div className="section-body">
        <div className="section-body_link">
          <a href={thisProject.link}>
            <i className="fab fa-github-square" />
          </a>
        </div>
        <div className="section-body_text">
          <p>{thisProject.description}</p>
          <p>{thisProject.role}</p>
        </div>
        <div className="section-gallery">
          {
            thisProject.screenShots && thisProject.screenShots.map(picture => {
              return <img key={picture} className="section-gallery_item" src={picture} />
            })
          }
        </div>
      </div>
    </div>
  )
};

export default PortfolioProject;
