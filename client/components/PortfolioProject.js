import React from 'react';

const PortfolioProject = (props) => {
  const { thisProject } = props;

  return (
    <div key={thisProject.name} className="section">
      <h2 className="section-title">{thisProject.name}</h2>
      <div className="section-body">
        <small>
          <a href={thisProject.link}>Link</a>
        </small>
        <p>{thisProject.description}</p>
        <p>{thisProject.role}</p>
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
