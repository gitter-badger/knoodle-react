import * as React from 'react';

export class Header extends React.Component
{
    render()
    {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                KNOODLE - <small>In Survey We Trust</small>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Menu 1</a></li>
                                <li><a href="#">Menu 2</a></li>
                                <li><a href="#">Menu 3</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
