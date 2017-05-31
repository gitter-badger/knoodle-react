import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './header';
import {Homepage} from './homepage';

export class Application extends React.Component<any, any>
{
    render()
    {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <div className="container-fluid">
                        <Route exact path="/" component={Homepage} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
