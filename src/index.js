import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// added 3 imports
import {Provider } from 'react-redux'
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';



//store for reducers
const reduxStore = createStore(
    combineReducers({
        feeling,understanding,support,comments
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
