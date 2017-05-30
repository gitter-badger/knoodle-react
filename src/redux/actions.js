import * as axios from 'axios';
import {store} from './store';

/**
 * Triggered when a user try to find a given survey
 */
export const SURVEYS_SEARCH = 'SURVEYS_SEARCH';

/**
 * Display one survey
 */
export const DISPLAY_SURVEY = 'DISPLAY_SURVEY';

/**
 * Answer to a survey
 */
export const ANSWER_SURVEY = 'ANSWER_SURVEY';

/**
 * Notify something
 */
export const NOTIFY = 'NOTIFY';

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

export function answerSurvey(survey, form) {
    let email = form.querySelector('input[name="email"]');
    let username = form.querySelector('input[name="username"]');

    let data = {
        user: {
            email: email.value,
            name: username.value
        },
        answers: []
    };

    survey.questions.map((question, index) => {
        let checkbox = form.querySelector(`#question-group-${index} input:checked`);

        data.answers[index] = {
            question: index,
            choice: parseInt(checkbox.dataset.index)
        };
    });

    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:3333/surveys/${survey._id}/answers`, data)
            .then(resolve)
            .catch(reject)
        ;
    }).then(response => {
        return {
            type: ANSWER_SURVEY,
            answer: response.data
        };
    });
}

export function notify(message, kind = 'info') {
    return {
        type: NOTIFY,
        message,
        kind
    };
}
