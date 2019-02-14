import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'; 
import store from '../src/config/store';

const app = <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>

ReactDOM.render (app, document.querySelector('root'));