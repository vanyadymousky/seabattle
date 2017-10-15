import React, { Component } from 'react'
import { Redirect } from 'react-router'
import './sign-in.scss'

export class SignIn extends Component {
  state = {
    username: '',
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  signIn = async (event) => {
    event.preventDefault()
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Encoding': 'UTF8',
    });
    await fetch('//localhost:3000/users/save-name', {
      body: JSON.stringify({
        username: this.state.username
      }),
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
    })
    this.setState({
      name: this.state.username,
    })
  }

  render() {
    if (this.state.name) {
      return <Redirect to="/game/123" />
    }

    return (
      <section className="welcome">
        <div className="sign-in-form">
          <form onSubmit={this.signIn}>
            <h1 className="mdc-typography--title">Introduce youself so enemies remember you!</h1>
            <div className="mdc-form-field">
              <div className="mdc-textfield" data-mdc-auto-init="MDCTextfield">
                <input id="username" type="text" value={this.state.value} onChange={this.handleChange} className="mdc-textfield__input"/>
                <label htmlFor="username" className="mdc-textfield__label">
                  Name
                </label>
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
