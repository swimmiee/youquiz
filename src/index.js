import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

var is_chrome = ((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) &&(navigator.vendor.toLowerCase().indexOf("google") > -1));
var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;

console.log(is_chrome, is_safari);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
