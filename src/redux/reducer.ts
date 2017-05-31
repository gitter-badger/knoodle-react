import {initialeState, ApplicationState, Survey} from './state';
import {Action} from './actions';

export const SURVEY_SEARCH = 'SURVEY_SEARCH';

export function reduce<T extends Action>(
    state: ApplicationState = initialeState,
    action: T
): ApplicationState {
    switch (action.type) {
        case SURVEY_SEARCH:
            return Object.assign(state, {surveys: action.surveys});
    }

    return state;
}
