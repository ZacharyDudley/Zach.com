import React, { Component } from 'react';

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
        'BACHELOR', 'BIBLIOPHILE', 'CAT FANCIER',
        'DADAIST', '\'PATAPHYSICIST', 'POSTMODERNIST',
        'CODER', 'MILLENIAL', 'ARIES',
        'EVERYMAN', 'GENTLEMAN', 'OMNIVORE',
        'ALUMNUS', 'CREATOR', 'TEAMMATE'
      ],
      nameOne: 'DEVELOPER',
      timeOne: 4000,
      nameTwo: 'DESIGNER',
      timeTwo: 5000,
      nameThree: 'PHILOSOPHER',
      timeThree: 2000
    }
  }

  setName(whichName) {
    let hasNewName = false;

    while (!hasNewName) {
      let randomName = Math.floor(Math.random() * this.state.names.length);
      let name = this.state.names[randomName];

      if (name !== this.state.nameOne && name !== this.state.nameTwo && name !== this.state.nameThree) {
        if (whichName === 'one') {
          let time = this.setTime();
          this.setState({nameOne: name});
          this.setState({timeOne: time});
        } else if (whichName === 'two') {
          let time = this.setTime();
          this.setState({nameTwo: name});
          this.setState({timeTwo: time});
        } else if (whichName === 'three') {
          let time = this.setTime();
          this.setState({nameThree: name});
          this.setState({timeThree: time});
        }
        hasNewName = true;
      }
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
    let randomTime = Math.floor(Math.random() * 4) + 1;
    return randomTime * 1000;
  }

  componentDidMount() {
    this.displayOne = setInterval(
      () => this.setName('one'), this.state.timeOne);

    this.displayTwo = setInterval(
      () => this.setName('two'), this.state.timeTwo);

    this.displayThree = setInterval(
      () => this.setName('three'), this.state.timeThree);
  }

  componentWillUnmount() {
    clearInterval(this.displayOne);
    clearInterval(this.displayTwo);
    clearInterval(this.displayThree);
  }


  render() {
    return (
      <div className="content home">
        <div className="section">
          <h1>{this.state.nameOne}</h1>
          <h1>{this.state.nameTwo}</h1>
          <h1>{this.state.nameThree}</h1>
        </div>
      </div>
    );
  }
}

export default Home;
