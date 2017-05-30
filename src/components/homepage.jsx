import * as axios from 'axios';
import * as React from 'react';
import {SurveyList} from './survey-list';
import {store} from './../redux/store';
import {searchForSurveys} from './../redux/actions';

export class Homepage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
        this.requestTimer = null;
        this.unsubscribe = null;
    }

    componentDidMount()
    {
        this.setState({surveys: store.getState().surveys});

        store.dispatch(searchForSurveys());

        this.unsubscribe = store.subscribe(() => {
            this.setState({surveys: store.getState().surveys});
        });
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    onSearchChange(event)
    {
        let name = event.target.value;

        if (this.requestTimer !== null) {
            clearTimeout(this.requestTimer);
        }

        this.requestTimer = setTimeout(() => {
            store.dispatch(searchForSurveys(name));
        }, 250);
    }

    render()
    {
        return (
            <div ref="homepage">
                <div className="jumbotron">
                    <h1>Find what's matter for you !!!!</h1>
                    <input className="form-control input-lg" type="text" onChange={this.onSearchChange.bind(this)}/>
                </div>
                <SurveyList surveys={this.state.surveys || []}></SurveyList>
            </div>
        );
    }
}
