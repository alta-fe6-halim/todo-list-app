import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Routes from './routes/Routes';
// import Detail from './pages/Detail';
// import Homepage from './pages/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Detail /> */}
    <Routes />
  </React.StrictMode>
);

