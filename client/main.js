import React from 'react'
// import { withRouter } from 'react-router'

const Main = props => {
  const { children } = props

  return (
    <div id="mainBox">
      {children}
    </div>
  )
}

export default Main
