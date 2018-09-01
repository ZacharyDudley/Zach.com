import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = (props) => {
  const downloadResumePdf = () => {
    window.open('Resume-ZachFriedman.pdf');
  };

  return (
    <div className="menu">
      <div className={`menu-title ${props.settings.title}`}>
        <h3 className="menu-title_name first">ZACHARY</h3>
        <h3 className="menu-title_name middle">D</h3>
        <h3 className="menu-title_name last">FRIEDMAN</h3>
        <h1 className="menu-title_name__thin first">Z</h1>
        <h1 className="menu-title_name__thin middle">D</h1>
        <h1 className="menu-title_name__thin last">F</h1>
      </div>

      <div className="menu-nav">
        <NavLink to="/about" className="menu-nav_item">ABOUT</NavLink>
        <NavLink to="/portfolio" className="menu-nav_item">PORTFOLIO</NavLink>
        <NavLink to="/resume" className="menu-nav_item">RE&#769;SUME&#769;</NavLink>
        {
          props.location.pathname === '/resume' &&
          <a className="menu-nav_item sub" onClick={downloadResumePdf}>View as .pdf</a>
        }
        <NavLink to="/contact" className="menu-nav_item">CONTACT</NavLink>
      </div>
    </div>
  );
};

const mapState = ({settings}) => ({settings});

const mapDispatch = (dispatch) => {
  return {}
};

export default connect(mapState, mapDispatch)(Menu);
