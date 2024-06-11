import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Ensure this path is correct and points to your App component

// This is the root element where your React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(<App />);