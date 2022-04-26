import {configureStore, createStore } from '@reduxjs/toolkit'
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhansers = composeWithDevTools();

const store = createStore (reducer,composeEnhansers);

export default store;   