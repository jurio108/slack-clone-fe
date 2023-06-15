import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';

import App from './layouts/App';

const container = document.getElementById('app');
const root = createRoot(container!);

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL =
//   process.env.NODE_ENV === 'production' ? 'https://sleact.nodebird.com' : 'http://localhost:3090';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,  
);
