import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Keep your CSS imports if you want
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
