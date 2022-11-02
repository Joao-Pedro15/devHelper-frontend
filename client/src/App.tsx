import React from 'react';
import { Routes } from './routes'
import { GlobalStyle } from './style/global'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
        
    </BrowserRouter>
);
}

export default App;
