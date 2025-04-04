import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, defaultTheme, darkTheme } from '@adobe/react-spectrum';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = prefersDark ? darkTheme : defaultTheme;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider theme={theme}>
      <App />
    </Provider>
  </React.StrictMode>
);
