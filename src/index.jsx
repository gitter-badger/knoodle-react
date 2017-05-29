import * as jQuery from 'jquery';

window.jQuery = window.$ = window.jquery = jQuery;

import * as React from 'react';
import {render as DOMRender} from 'react-dom';
import {Application} from './components/application';

document.addEventListener('DOMContentLoaded', function (event) {
    require('bootstrap/dist/js/bootstrap');

    DOMRender(
        <Application />,
        document.getElementById('application')
    );
});
