import * as axios from 'axios';
import * as React from 'react';
import {SurveyList} from './survey-list';

export class Homepage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
        this.requestTimer = null;
    }

    componentDidMount()
    {
        axios
            .get('http://localhost:3333/surveys')
            .then(response => this.setState({surveys: response.data}))
            .catch(console.error)
        ;
    }

    onSearchChange(event)
    {
        let name = event.target.value;

        if (this.requestTimer !== null) {
            clearTimeout(this.requestTimer);
        }

        this.requestTimer = setTimeout(() => {
            axios
                .get('http://localhost:3333/surveys', {params: {name: name}})
                .then(response => this.setState({surveys: response.data}))
                .catch(console.error)
            ;
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
