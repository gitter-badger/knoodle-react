import {initialeState} from './state';
import {SURVEYS_SEARCH, DISPLAY_SURVEY} from './actions';

export function reducer(state = initialeState, action) {
    switch (action.type) {
        case SURVEYS_SEARCH:
            return Object.assign(state, {surveys: action.surveys});
        case DISPLAY_SURVEY:
            return Object.assign(state, {survey: action.survey});
    }

    return state;
}
