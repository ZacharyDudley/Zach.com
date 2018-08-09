import React from 'react';

const Main = props => {
  const { children } = props

  return (
    <div id="page-grid">
      {children}
    </div>
  )
};

export default Main;
