import React from 'react'
import { render } from 'react-dom'
import { Battlefield } from './components/battlefield/battlefield'
import { BrowserRouter, Route } from 'react-router-dom'
import { SignIn } from './components/sign-in/sign-in'

import './app.scss'

render(
  <BrowserRouter>
    <main>
      <Route path="/" component={SignIn}/>
      <Route path="/game/:gameId" component={Battlefield}/>
    </main>
  </BrowserRouter>,
  document.getElementById('root')
)
