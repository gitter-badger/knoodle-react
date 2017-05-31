import * as React from 'react';
import {Link} from 'react-router-dom';
import {store} from './../redux/store';
import {searchForSurveys} from './../redux/actions';

export class Homepage extends React.Component<any, any>
{
    private unsubscribe: () => void;

    constructor(props: any)
    {
        super(props);

        this.state = {};
    }

    componentDidMount()
    {
        this.setState({surveys: store.getState().surveys});

        this.unsubscribe = store.subscribe(() => this.setState({surveys: store.getState().surveys}));

        store.dispatch<any>(searchForSurveys());
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    onSearchChange()
    {
    }

    render()
    {
        return (
            <div ref="homepage">
                <div className="jumbotron">
                    <h1>Find what's matter for you !!!!</h1>
                    <input className="form-control input-lg" type="text" onChange={this.onSearchChange.bind(this)}/>
                </div>
                <div>
                    {!this.state.surveys ? null : this.state.surveys.map((survey: any) => (
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
                    ))}
                </div>
            </div>
        )
    }
}
