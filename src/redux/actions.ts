import axios from 'axios';
import {Survey} from './state';

export const SURVEY_SEARCH = 'SURVEY_SEARCH';

interface Action
{
    type: string;
    [property: string]: any;
}

interface SurveySearchAction extends Action
{
    surveys: Survey[];
};

export function searchForSurveys(term: string = ''): Promise<SurveySearchAction> {
    return axios
        .get(`${process.env.API_BASE_URL}/surveys`, {params: {term}})
        .then(response => ({
            type: SURVEY_SEARCH,
            surveys: response.data
        }))
   ;
}

export {SurveySearchAction, Action};
