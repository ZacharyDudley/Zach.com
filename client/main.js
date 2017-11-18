import React from 'react'

const Main = props => {
  const { children } = props

  return (
    <div id="mainBox">
      {children}
    </div>
  )
}

export default Main
