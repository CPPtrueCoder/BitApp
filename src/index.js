import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";




ReactDOM.render(
  <React.StrictMode>
      <div className="container">
    <App />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

