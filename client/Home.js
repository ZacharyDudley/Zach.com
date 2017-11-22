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

  nameOpacity(element, inOrOut) {
    let nameElement = document.getElementById(element)
    console.log(nameElement)


    if (inOrOut === 'in') {
      nameElement.classList.remove('fadeOut')
      nameElement.classList.add('fadeIn')
    } else {
      nameElement.classList.remove('fadeIn')
      nameElement.classList.add('fadeOut')
    }
  }

  setName(whichName) {
    let hasNewName = false

    while (!hasNewName) {
      let randomName = Math.floor(Math.random() * this.state.names.length)
      let name = this.state.names[randomName]

      if (name !== this.state.nameOne && name !== this.state.nameTwo && name !== this.state.nameThree) {
        if (whichName === 'one') {
          let time = this.setTime()
          this.setState({nameOne: name})
          this.setState({timeOne: time})
          this.nameOpacity('one', 'in')
        } else if (whichName === 'two') {
          let time = this.setTime()
          this.setState({nameTwo: name})
          this.setState({timeTwo: time})
          this.nameOpacity('two', 'in')
        } else if (whichName === 'three') {
          let time = this.setTime()
          this.setState({nameThree: name})
          this.setState({timeThree: time})
          this.nameOpacity('three', 'in')
        }
        hasNewName = true
      }
    }


    const chooseAndAnimateName = () => {
      let time = this.setTime()

      window.requestAnimationFrame(chooseAndAnimateName)
    }

    // let randomName = Math.floor(Math.random() * this.state.names.length)
    // let name = this.state.names[randomName]
    // while (name !== this.state.nameOne && name !== this.state.nameTwo && name !== this.state.nameThree){
    //   if (whichName === 'one') {
    //     let time = this.setTime()
    //     this.setState({nameOne: name})
    //     this.setState({timeOne: time})
    //   } else if (whichName === 'two') {
    //     let time = this.setTime()
    //     this.setState({nameTwo: name})
    //     this.setState({timeTwo: time})
    //   } else if (whichName === 'three') {
    //     let time = this.setTime()
    //     this.setState({nameThree: name})
    //     this.setState({timeThree: time})
    //   }
    // }
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
          <h1 id="one">{this.state.nameOne}</h1>
          <h1 id="two">{this.state.nameTwo}</h1>
          <h1 id="three">{this.state.nameThree}</h1>
        </div>
      </div>
    )
  }
}

export default Home
