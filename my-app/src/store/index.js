import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { initState } from './initState.js';
import {reducers} from './initState.js'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(reducers, initState, composeEnhancers);