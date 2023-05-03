import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

for(let i=61;i<=100;i++){
  console.log(`未看第${i}集`)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
