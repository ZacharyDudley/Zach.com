import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const downloadResumePdf = () => {
    window.open('Resume-ZachFriedman.pdf');
  };

  return (
    <div id="sideMenu">
      <div id="sideMenu-name">
        <p>ZACHARY<br /><span>D</span><br /> FRIEDMAN</p>
      </div>

      <div id="sideMenu-nav">
        <NavLink exact to="/">HOME</NavLink>
        <NavLink to="/portfolio">PORTFOLIO</NavLink>
        {
          // <NavLink to="/blog">BLOG</NavLink>
        }
        <NavLink to="/resume">RE&#769;SUME&#769;</NavLink>
        {
          props.location.pathname === '/resume' &&
          <a className="sideMenu-sub" style={{fontSize: '2.25vh', paddingTop: '0'}} onClick={downloadResumePdf}>View as .pdf</a>
        }
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Menu;
