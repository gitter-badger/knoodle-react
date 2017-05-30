import * as React from 'react';
import {Header} from './header';
import {Homepage} from './homepage';
import {Footer} from './footer';
import {BrowserRouter, Route} from 'react-router-dom';
import {Survey} from './survey';
import {FlashMessages} from './flash-messages';

export class Application extends React.Component
{
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
