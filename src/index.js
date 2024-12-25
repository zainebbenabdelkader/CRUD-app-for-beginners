import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDOM.createRoot(...): Creates a React root for managing the rendering of React components
root.render( //root.render: This tells React to render the app into the root DOM element
//root.render: ensures that everything inside the <App /> component is inserted into the <div id="root"></div>
  <React.StrictMode>
    <App />
  </React.StrictMode> //<React.StrictMode> is a wrapper that helps identify problems in the app,
  
);


