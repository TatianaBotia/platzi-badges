// importacion de react para poder urilizar JSX
import React from 'react';
// importacion de reacdom
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import App from './components/App'

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
