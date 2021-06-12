import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// added 3 imports
import {Provider } from 'react-redux'
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//feeling reducer
const feeling = (state = {}, action) => {
    switch (action.type) {
        // case of add feeling
        case 'ADD_FEELING' :
            return {
                feeling: action.payload
            };
        // case reset because submitted
        case 'SUBMITTED' :
            return {
                feeling: ''
            }
    }
    return state;
}

// understanding reducer
const understanding = (state = {}, action) => {
    switch (action.type) {
        // case of add understanding
        case 'ADD_UNDERSTANDING' :
            return {
                understanding: action.payload
            };
        // case reset because submitted
        case 'SUBMITTED' :
            return {
                understanding: ''
            }
    }
    return state;
}

// support reducer
const support = (state = {}, action) => {
    switch (action.type) {
        // case of add support
        case 'ADD_SUPPORT' :
            return {
                support: action.payload
            };
        // case reset because submitted
        case 'SUBMITTED' :
            return {
                support: ''
            }
    }
    return state;
}

// comments reducer
const comments = (state = {}, action) => {
    switch (action.type) {
        // case of add comments
        case 'ADD_COMMENTS' :
            return {
                comments: action.payload
            };
        // case reset because submitted
        case 'SUBMITTED' :
            return {
                comments: ''
            }
    }
    return state;
}

//store for reducers
const reduxStore = createStore(
    combineReducers({
        feeling,understanding,support,comments
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
