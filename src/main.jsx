import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@components/App';
import { BrowserRouter } from 'react-router-dom';
import './styles/base.scss';

const container = document.getElementById('app-root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/grand-silver">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
