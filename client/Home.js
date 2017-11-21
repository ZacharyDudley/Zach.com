import React, { Component } from 'react'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      names: [
        'DESIGNER', 'DEVELOPER', 'PHILOSOPHER',
        'SOLIPSIST', 'MINIMALIST', 'POET',
        'MENSCH', 'ARTIST', 'CONSUMER',
        'AMERICAN', 'PROGRAMMER', 'COMEDIAN',
        'GUITARIST', 'READER', 'OHIOAN',
        'DREAMER', 'FRIEND', 'CITIZEN',
        'MATERIALIST', 'IDEALIST', 'HUMAN',
        'GEOCENTRIST', 'BIBLIOPHILE', 'CAT FANCIER',
        'DADAIST', '\'PATAPHYSICIST', 'POSTMODERNIST',
        'CODER', 'MILLENIAL', 'ARIES',
        'EVERYMAN', 'GENTLEMAN'
      ],
      nameOne: '',
      nameTwo: '',
      nameThree: ''
    }
  }

  setName(whichName) {
    let randomName = Math.floor(Math.random() * this.state.names.length) + 1
    let name = this.state.names[randomName]

    if (whichName === 'one') {
      this.setState({nameOne: name})
    } else if (whichName === 'two') {
      this.setState({nameTwo: name})
    } else if (whichName === 'three') {
      this.setState({nameThree: name})
    }
  }

  setTime() {
    let randomTime = Math.floor(Math.random() * 4) + 1
    return randomTime * 1000
  }

  componentDidMount() {
    this.displayOne = setInterval(
      () => this.setName('one'), this.setTime())

    this.displayTwo = setInterval(
      () => this.setName('two'), this.setTime())

    this.displayThree = setInterval(
      () => this.setName('three'), this.setTime())
  }

  componentWillUnmount() {
    clearInterval(this.displayOne)
    clearInterval(this.displayTwo)
    clearInterval(this.displayThree)
  }


  render() {
    return (
      <div className="contentBox">
        <div className="section">
          <h2>{this.state.nameOne}</h2>
          <h2>{this.state.nameTwo}</h2>
          <h2>{this.state.nameThree}</h2>
        </div>
      </div>
    )
  }
}

export default Home
