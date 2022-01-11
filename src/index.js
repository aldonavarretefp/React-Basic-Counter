import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';

console.log("Hola mundo");
// const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo="Hola desde index" />,divRoot);
ReactDOM.render(<CounterApp/>,divRoot);