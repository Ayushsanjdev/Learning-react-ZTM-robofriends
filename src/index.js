import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={'Hello React ninja'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
