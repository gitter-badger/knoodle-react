import * as React from 'react';
import {Header} from './header';
import {Homepage} from './homepage';
import {Footer} from './footer';
import {BrowserRouter, Route} from 'react-router-dom';

export class Application extends React.Component
{
    render()
    {
        return (
            <div>
                <Header>header</Header>

                <div className="container-fluid">
                    <BrowserRouter>
                        <Route exact path="/" component={Homepage} />
                    </BrowserRouter>
                </div>

                <Footer>footer</Footer>
            </div>
        );
    }
}
