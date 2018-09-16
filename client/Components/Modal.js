import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkPassword, toggleModal } from '../store';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }

    this.closeModal = this.closeModal.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  closeModal() {
    let inputField = document.getElementById('inputField');
    inputField.value = '';
    this.setState({password: ''});
    this.props.setModal(false);
  }

  handlePasswordInput(event) {
    this.setState({password: event.target.value.toLowerCase()});
  }

  handlePassword(event) {
    event.preventDefault();

    if (this.state.password !== '') {
      this.props.enterPassword(this.state.password);
    }

    this.closeModal();
  }

  render() {
    if (!this.props.settings.viewModal) {
      return null;
    }

    return (
      <div className="modal">
        <form onSubmit={this.handlePassword}>
          <input
            id="inputField"
            type="text"
            name="inputField"
            tabIndex="-1"
            autoComplete="off"
            autoFocus
            onChange={this.handlePasswordInput}
          />
        </form>
        <div className="modal-button_close" onClick={this.closeModal} />
        <div className="modal-background" />
      </div>
    );
  }
}

const mapState = ({settings}) => ({settings});

const mapDispatch = (dispatch) => {
  return {
    enterPassword(guess) {
      dispatch(checkPassword(guess));
    },
    setModal(view) {
      dispatch(toggleModal(view));
    }
  }
};

export default connect(mapState, mapDispatch)(Modal);
