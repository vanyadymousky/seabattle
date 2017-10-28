import React, { Component } from 'react';
import { state } from '../../state/index';

export class Lobby extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.unsubscribe =
      state.subscribe(state => {
        this.setState({
          users: state.users,
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <main>
      Looking for game?
      <ul>
        {this.state.users.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </main>;
  }
}
