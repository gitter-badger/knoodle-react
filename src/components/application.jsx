import * as React from 'react';
import {Header} from './header';
import {Homepage} from './homepage';
import {Footer} from './footer';
import {BrowserRouter, Route} from 'react-router-dom';
import {Survey} from './survey';
import {FlashMessages} from './flash-messages';
import {store} from './../redux/store';
import {notifyAnswer} from './../redux/actions';

export class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.socket = new WebSocket(process.env.WS_BASE_URL);
    }

    componentDidMount()
    {
        this.socket.addEventListener('message', ({data}) => {
            store.dispatch(notifyAnswer(JSON.parse(data)));
        });
    }

    componentWillUnmount()
    {
        this.socket.removeEventListener('message');
    }

    render()
    {
        return (
            <div>
                <Header>header</Header>

                <div className="container-fluid">
                    <FlashMessages />
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/surveys/:id" component={Survey} />
                        </div>
                    </BrowserRouter>
                </div>

                <Footer>footer</Footer>
            </div>
        );
    }
}
