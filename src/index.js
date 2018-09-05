import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * import bootstrap styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
