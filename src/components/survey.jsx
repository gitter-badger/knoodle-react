import * as React from 'react';
import {get, post} from 'axios';
import {Redirect} from 'react-router-dom';
import {store} from './../redux/store';
import {displaySurvey} from './../redux/actions';

export class Survey extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    componentDidMount()
    {
        this.setState({survey: store.getState().survey});

        store.dispatch(displaySurvey(this.props.match.params.id));

        this.unsubscribe = store.subscribe(() => {
            this.setState({survey: store.getState().survey})
        });
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    answer(event)
    {
        event.preventDefault();

        let data = {
            user: {
                email: this.refs.email.value,
                name: this.refs.username.value
            },
            answers: []
        };

        this.state.survey.questions.map((question, index) => {
            let checkedBox = this.refs[`question-group-${index}`].querySelector('input:checked');

            data.answers[index] = {
                question: index,
                choice: parseInt(checkedBox.dataset.index)
            };
        });

        post(`http://localhost:3333/surveys/${this.state.survey._id}/answers`, data)
            .then(response => {
                this.setState(Object.assign(this.state, {
                    answer: response.data
                }));
            })
            .catch(console.error)
        ;

        return false;
    }

    render()
    {
        if (this.state.answer) {
            return <Redirect to="/" />;
        }

        if (!this.state.survey) {
            return (<h4>We ar loading this survey, please wait ...</h4>);
        }

        return (
            <form ref="survey" onSubmit={this.answer.bind(this)}>
                <div className="jumbotron">
                    <h1>{this.state.survey.name}</h1>
                    <p>{this.state.survey.description}</p>
                </div>
                {this.state.survey.questions.map((question, questionIndex) => (
                    <div className="panel panel-default" key={questionIndex}>
                        <div className="panel-heading">
                            <h4 className="panel-title">{question.title}</h4>
                        </div>
                        <div className="panel-body" ref={`question-group-${questionIndex}`}>
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
                                <input ref="email" type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <input ref="username" type="type" className="form-control" placeholder="Firstname Lastname" />
                            </div>
                            <button type="submit" className="btn btn-success">Answer</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
