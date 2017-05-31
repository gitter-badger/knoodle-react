import {createStore, applyMiddleware} from 'redux';
import {reduce} from './reducer';
import * as promise from 'redux-promise';

export const store = createStore(reduce, applyMiddleware(promise));
