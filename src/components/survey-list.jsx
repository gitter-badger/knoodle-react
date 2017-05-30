import * as React from 'react';

export class SurveyList extends React.Component
{
    render()
    {
        return (
            <div ref="survey-list">
                {this.props.surveys.map(survey =>
                    <div className="col-md-6" key={survey._id}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">{survey.name}</h4>
                            </div>
                            <div className="panel-body">
                                {survey.description}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
