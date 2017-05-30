import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import promiseMiddleware from 'redux-promise';

export const store = createStore(reducer, applyMiddleware(promiseMiddleware));
