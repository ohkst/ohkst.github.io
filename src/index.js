import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "core-js/stable";
import "regenerator-runtime/runtime";

// styles
import './index.css';
import './styles/navigation.css';
import './styles/tab.css';
import './styles/list.css';
import './styles/filters.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);