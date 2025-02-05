import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import withToast from './hocs/withToast';
import './index.css'

const AppWithToast = withToast(App);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AppWithToast />
  </React.StrictMode>
); 