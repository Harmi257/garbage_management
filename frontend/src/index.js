// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from '../src/infrastructure/apollo/apolloClient'; 


const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
