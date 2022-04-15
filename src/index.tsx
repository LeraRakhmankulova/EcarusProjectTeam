import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import state from '../src/redux/state'
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'mobx-react';
import { store } from './store';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

