import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(
    document.getElementById('root') || document.createElement('div'),
);

root.render(
    <React.StrictMode key="strictMode">
        <App />
    </React.StrictMode>,
);
