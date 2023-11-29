//index para probar delete mientras

//importamos React
import React from 'react';
import ReactDOM from 'react-dom/client';

//importamos CSS
import './CSS/index.css';

//importamos complementos
import { Header } from './Header';
import { Read } from './Read';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <div>
      <Read/>
    </div>
  </>
);