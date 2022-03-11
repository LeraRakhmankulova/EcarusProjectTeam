import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';
import { ModalConstructor } from './components/modal/ModalConstructor/ModalConstructor';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />
      <ModalConstructor />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
