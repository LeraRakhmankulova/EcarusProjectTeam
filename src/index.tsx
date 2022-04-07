import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addFunc} from '../src/redux/state';
import state from '../src/redux/state'


addFunc('Hello Lera fron index.ts')

ReactDOM.render(
  <React.StrictMode>
      <App props={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
