import React, { Component } from 'react';

export class Lobby extends Component {

  render() {
    const playersList = [];
    return <main>
      Hi there!!!
      <ul>
        {playersList.map(({ name }) => <li>{name}</li>)}
      </ul>
    </main>;
  }
}
