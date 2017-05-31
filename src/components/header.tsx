import {Link} from 'react-router-dom';
import * as React from 'react';

export class Header extends React.Component<any, any>
{
    render()
    {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">
                                KNOODLE - <small>In Survey We Trust</small>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
