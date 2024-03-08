//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import App from './components/App';

//Compiled Bootstrap Sass
import './css/scss/index.css';

//Bootstrap Icons CSS
import "bootstrap-icons/font/bootstrap-icons.css";

//WebVitals
import reportWebVitals from './tests/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
