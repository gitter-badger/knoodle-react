import * as React from 'react';
import {Header} from './header';
import {Homepage} from './homepage';
import {Footer} from './footer';

export class Application extends React.Component
{
    render()
    {
        return (
            <div>
                <Header>header</Header>

                <div className="container-fluid">
                    <Homepage>homepage</Homepage>
                </div>

                <Footer>footer</Footer>
            </div>
        );
    }
}
