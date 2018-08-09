import React, { Component } from 'react';

class Modal extends Component {
  constructor(){
    super()
    this.state = {
      on: false
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        if (!this.state.on) {
          this.setState({on: true});
          // document.getElementById('password').focus();
        } else {
          this.setState({on: false});
        }
      }
    });
  }

  render() {
    return (
      <div className={this.state.on ? 'modal on' : 'modal off'}>
        <form>
          <input id="password" type="text" name="password" />
        </form>
      </div>
    );
  }
}

export default Modal;
