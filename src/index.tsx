import 'babel-es6-polyfill';
import * as React from 'react';
import {render} from 'react-dom';
import {Application} from './components/application';

document.addEventListener('DOMContentLoaded', () => {
    render(<Application />, document.getElementById('application'));
});
