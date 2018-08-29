import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/**
 * We import everything that we need globally, here: 
 *  for instance: Bootstrap or any other styling CSS, SASS or LESS framework 
 * here we've imported the minifed version of bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
