import * as React from 'react';
import {get, post} from 'axios';
import {Redirect} from 'react-router-dom';
import {store} from './../redux/store';
import {displaySurvey, answerSurvey} from './../redux/actions';

export class Survey extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    componentDidMount()
    {
        this.updateState();

        store.dispatch(displaySurvey(this.props.match.params.id));

        this.unsubscribe = store.subscribe(this.updateState.bind(this));
    }

    updateState()
    {
        this.setState({
            survey: store.getState().survey,
            redirect: store.getState().survey && store.getState().surveyAnswer &&
                store.getState().surveyAnswer.survey === store.getState().survey._id
        });
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    answer(event)
    {
        event.preventDefault();

        store.dispatch(answerSurvey(
            this.state.survey,
            this.refs.form
        ));

        return false;
    }

    render()
    {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        if (!this.state.survey) {
            return (<h4>We ar loading this survey, please wait ...</h4>);
        }

        return (
            <form ref="form" onSubmit={this.answer.bind(this)}>
                <div className="jumbotron">
                    <h1>{this.state.survey.name}</h1>
                    <p>{this.state.survey.description}</p>
                </div>
                {this.state.survey.questions.map((question, questionIndex) => (
                    <div className="panel panel-default" key={questionIndex}>
                        <div className="panel-heading">
                            <h4 className="panel-title">{question.title}</h4>
                        </div>
                        <div className="panel-body" id={`question-group-${questionIndex}`}>
                            {question.answers.map((answer, index) => (
                                <div className="form-group" key={index}>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name={`answer-${questionIndex}`} id={`answer-${questionIndex}-${index}`} data-index={index} value={index} />
                                            {answer}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="form-inline">
                            <div className="form-group">
                                <input name="email" type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <input name="username" type="type" className="form-control" placeholder="Firstname Lastname" />
                            </div>
                            <button type="submit" className="btn btn-success">Answer</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
