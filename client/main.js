import React from 'react';
import { withRouter } from 'react-router-dom';

const Main = props => {
  const { children } = props

  return (
    <div id="mainBox">
      {children}
    </div>
  )
}

export default withRouter(Main)
