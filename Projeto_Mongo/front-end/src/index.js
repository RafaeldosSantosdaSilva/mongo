import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style/normalize.css';

ReactDOM.hydrate(
    <App />,
  document.getElementById('root')
);