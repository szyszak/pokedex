import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root { 
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 420px) and (max-height: 650px) {
      display: block;
    }
  }

  body {
    background-color: #f5f5f5;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 420px) {
      background-color: #db0c2c;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arvo', serif;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App className="App" />
  </>,
  document.getElementById('root'),
);
