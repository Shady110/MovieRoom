import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.Domain ;
const client_ID = process.env.Client_ID ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain = {domain}
      clientId= {client_ID}
      redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

