import React from 'react';
import { render } from 'react-dom';

function Test() {
  return <div>Hi there!</div>;
}

render(
  <Test />,
  document.getElementById('root')
);
