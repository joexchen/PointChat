import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter} from "./index.redux";

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevTools
));
ReactDom.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root')
);
