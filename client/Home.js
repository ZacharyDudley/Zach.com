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
      nameOne: 'DEVELOPER',
      timeOne: 5000,
      nameTwo: 'DESIGNER',
      timeTwo: 3000,
      nameThree: 'PHILOSOPHER',
      timeThree: 4000
    }
  }

  setName(whichName) {
    let randomName = Math.floor(Math.random() * this.state.names.length)
    let name = this.state.names[randomName]
    while (name !== this.state.nameOne && name !== this.state.nameTwo && name !== this.state.nameThree){
      if (whichName === 'one') {
        let time = this.setTime()
        this.setState({nameOne: name})
        this.setState({timeOne: time})
        console.log('ONE: ', this.state.nameOne, this.state.timeOne)
      } else if (whichName === 'two') {
        let time = this.setTime()
        this.setState({nameTwo: name})
        this.setState({timeTwo: time})
        console.log('TWO: ', this.state.nameTwo, this.state.timeTwo)
      } else if (whichName === 'three') {
        let time = this.setTime()
        this.setState({nameThree: name})
        this.setState({timeThree: time})
        console.log('THREE: ', this.state.nameThree, this.state.timeThree)
      }
    }
  }

  setTime() {
    let randomTime = Math.floor(Math.random() * 4) + 1
    return randomTime * 1000
  }

  componentDidMount() {
    this.displayOne = setInterval(
      () => this.setName('one'), this.state.timeOne)

    this.displayTwo = setInterval(
      () => this.setName('two'), this.state.timeTwo)

    this.displayThree = setInterval(
      () => this.setName('three'), this.state.timeThree)
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
