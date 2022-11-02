import React from 'react';
import { Routes } from './routes'
import { GlobalStyle } from './style/global'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
);
}

export default App;
