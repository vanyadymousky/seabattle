import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { saveName } from '../../services/fetch/save-name';

import './sign-in.scss';

export class SignIn extends Component {
  state = {
    loggedIn: false,
    nameInputValue: '',
  }


  handleChange = (event) => {
    this.setState({ nameInputValue: event.target.value });
  }

  signIn = async (event) => {
    event.preventDefault();
    const { nameInputValue } = this.state;
    await saveName(nameInputValue);
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      /**
       * When user is authorized and we know who he's - redirect to lobby: ready to play!
       */
      return <Redirect to='/lobby'/>;
    }

    return (
      <section className="welcome">
        <div className="sign-in-form">
          <form onSubmit={this.signIn}>
            <h1 className="mdc-typography--title">Introduce youself so enemies remember you!</h1>
            <div className="mdc-form-field">
              <div className="mdc-textfield" data-mdc-auto-init="MDCTextfield">

                <input id="username" type="text"
                       value={this.state.nameInputValue}
                       onChange={this.handleChange}
                       className="mdc-textfield__input"/>

                <label htmlFor="username" className="mdc-textfield__label">Name</label>
              </div>
            </div>

            <button type="submit"
                    className="mdc-button
                   mdc-button--raised
                   mdc-button--primary
                   mdc-ripple-surface"
                    data-mdc-auto-init="MDCRipple">
              To Battle!
            </button>
          </form>
        </div>
      </section>
    )
  }
}

SignIn.propTypes = {}
