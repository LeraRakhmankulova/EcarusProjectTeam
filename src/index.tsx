import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.sass';
import state from '../src/redux/state'
import App from './App';


let rerender = (state:any) => {
  ReactDOM.render(
    <React.StrictMode>
        <App props={state}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender(state);
