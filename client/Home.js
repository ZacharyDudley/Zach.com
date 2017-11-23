import React, { Component } from 'react'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      names: [
        'DESIGNER', 'DEVELOPER', 'PHILOSOPHER', 'SOLIPSIST', 'MINIMALIST',
        'POET', 'MENSCH', 'ARTIST', 'CONSUMER', 'AMERICAN',
        'PROGRAMMER', 'COMEDIAN', 'GUITARIST', 'READER', 'OHIOAN',
        'DREAMER', 'FRIEND', 'CITIZEN', 'MATERIALIST', 'IDEALIST',
        'HUMAN', 'GEOCENTRIST', 'BIBLIOPHILE', 'CAT FANCIER', 'DADAIST',
        '\'PATAPHYSICIST', 'POSTMODERNIST', 'CODER', 'MILLENIAL', 'ARIES',
        'EVERYMAN', 'GENTLEMAN', 'OMNIVORE'
      ],
      nameOne: 'DEVELOPER',
      timeOne: 4000,
      nameTwo: 'DESIGNER',
      timeTwo: 5000,
      nameThree: 'PHILOSOPHER',
      timeThree: 2000
    }
  }

  getRandomTime() {
    let randomTime = Math.floor(Math.random() * 4) + 1
    return randomTime * 1000
  }

  getRandomName() {
    let randomName = Math.floor(Math.random() * this.state.names.length)
    let name = this.state.names[randomName]
    return name
  }

  getUniqueName() {
    let name = ''

    while (name === '' || name === this.state.nameOne || name === this.state.nameTwo || name === this.state.nameThree) {
      name = this.getRandomName()
    }

    return name
  }


  nameOpacity(element, inOrOut) {
    let nameElement = document.getElementById(element)
    nameElement.classList.remove('fadeIn')
    nameElement.classList.remove('fadeOut')

    if (inOrOut === 'in') {
      nameElement.classList.add('fadeIn')
    } else {
      nameElement.classList.add('fadeOut')
    }
  }

  setNameAndTime(whichName) {
    let hasNewName = false

    while (!hasNewName) {
      let name = this.getUniqueName()

      if (name !== this.state.nameOne && name !== this.state.nameTwo && name !== this.state.nameThree) {
        if (whichName === 'one') {
          let time = this.getRandomTime()
          this.setState({nameOne: name, timeOne: time})
          this.nameOpacity('one', 'in')
        } else if (whichName === 'two') {
          let time = this.getRandomTime()
          this.setState({nameTwo: name, timeTwo: time})
          this.nameOpacity('two', 'in')
        } else if (whichName === 'three') {
          let time = this.getRandomTime()
          this.setState({nameThree: name, timeThree: time})
          this.nameOpacity('three', 'in')
        }
        hasNewName = true
      }
    }
  }

  componentDidMount() {
    this.displayOne = setInterval(
      () => this.setNameAndTime('one'), this.state.timeOne)

    this.displayTwo = setInterval(
      () => this.setNameAndTime('two'), this.state.timeTwo)

    this.displayThree = setInterval(
      () => this.setNameAndTime('three'), this.state.timeThree)
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
          <h1 id="one">{this.state.nameOne}</h1>
          <h1 id="two">{this.state.nameTwo}</h1>
          <h1 id="three">{this.state.nameThree}</h1>
        </div>
      </div>
    )
  }
}

export default Home
