import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Main = props => {
  const { children } = props

  return (
    <div id="page-grid" className={props.color}>
      {children}
    </div>
  )
};

const mapState = ({color}) => ({color});

const mapDispatch = (dispatch) => {
  return {}
};

export default withRouter(connect(mapState, mapDispatch)(Main));
