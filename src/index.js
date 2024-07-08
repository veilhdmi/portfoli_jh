import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar } from './files/Navbar/Navbar.jsx';
import reportWebVitals from './reportWebVitals';
import { ScrollDemo } from './files/Windows/Scroll.jsx';
import MainPage, {Main} from './files/Windows/Main.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage></MainPage>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
