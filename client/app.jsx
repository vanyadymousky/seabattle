import React from 'react';
import { render } from 'react-dom';
import { Battlefield } from './components/battlefield/battlefield';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignIn } from './components/sign-in/sign-in';
import { Lobby } from './components/lobby/lobby';

import './app.scss';

render(
  <BrowserRouter>
    <main>
      <Route exact path="/" component={SignIn} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/game/:gameId" component={Battlefield} />
    </main>
  </BrowserRouter>,
  document.getElementById('root')
);
