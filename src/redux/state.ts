interface Question
{
    _id: string;
    title: string;
    answers: string[];
}

interface Survey
{
    _id: string;
    name: string;
    description: string;
    questions: Array<Question>,
}

interface ApplicationState
{
    surveys: Survey[];
}

export const initialeState: ApplicationState = {
    surveys: [],
};

export {Question, Survey, ApplicationState};
