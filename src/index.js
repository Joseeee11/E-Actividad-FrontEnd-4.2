//importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';

//importamos CSS
import './CSS/index.css';

//importamos complementos
import { Header } from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
  </>
);