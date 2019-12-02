import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.css';
import './styles/global.css';
import './styles/base.css';
import Shell from './Shell';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Shell />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
