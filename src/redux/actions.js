import * as axios from 'axios';

/**
 * Triggered when a user try to find a given survey
 */
export const SURVEYS_SEARCH = 'SURVEYS_SEARCH';

/**
 * Display one survey
 */
export const DISPLAY_SURVEY = 'DISPLAY_SURVEY';

/**
 * Actions Creator
 */
export function searchForSurveys(term = '') {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:3333/surveys`, {params: {name: term}})
            .then(resolve)
            .catch(reject)
        ;
    }).then(response => {
        return {
            type: SURVEYS_SEARCH,
            surveys: response.data
        };
    });
}

export function displaySurvey(id) {
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:3333/surveys/${id}`)
            .then(resolve)
            .catch(reject)
        ;
    }).then(response => {
        return {
            type: DISPLAY_SURVEY,
            survey: response.data
        };
    });
}
