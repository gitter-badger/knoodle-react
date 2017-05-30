import * as React from 'react';
import {Link} from 'react-router-dom';

export class SurveyList extends React.Component
{
    render()
    {
        return (
            <div ref="survey-list">
                {this.props.surveys.map(survey =>
                    <div className="col-md-6" key={survey._id}>
                        <Link to={`/surveys/${survey._id}`}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">{survey.name}</h4>
                                </div>
                                <div className="panel-body">
                                    {survey.description}
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}
