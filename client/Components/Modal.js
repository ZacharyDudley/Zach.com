import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkPassword } from '../store';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      password: ''
    }

    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.key === 'Enter' && !this.state.on) {
        this.setState({on: true, password: ''});
      }
    })
  }

  handlePasswordInput(event) {
    this.setState({password: event.target.value.toLowerCase()});
  }

  handlePassword(event) {
    event.preventDefault();

    if (this.state.password !== '') {
      this.props.enterPassword(this.state.password);
    }

    this.setState({on: false, password: ''});
  }

  render() {
    return (
      <div className={this.state.on ? 'modal on' : 'modal off'}>
        <form onSubmit={this.handlePassword}>
          <input
            id="password"
            type="text"
            name="password"
            tabIndex="-1"
            onChange={this.handlePasswordInput}
          />
        </form>
      </div>
    );
  }
}

const mapState = ({color}) => ({color});

const mapDispatch = (dispatch) => {
  return {
    enterPassword(guess) {
      dispatch(checkPassword(guess));
    }
  }
};

export default connect(mapState, mapDispatch)(Modal);
