import * as React from 'react';
import {surveys} from './../fixtures/surveys';

export class Homepage extends React.Component
{
    render()
    {
        return (
            <div ref="homepage">
                <div className="jumbotron">
                    <h1>Knoodle</h1>
                    <p>In Survey We Trust !</p>
                </div>
                <div className="row">
                    {surveys.map(survey => 
                        <div className="col-md-6 panel panel-default" key={survey._id}>
                            <div className="panel-body">
                                <h4>{survey.name}</h4>
                                <hr/>
                                <p>Short description ...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
