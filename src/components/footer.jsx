import * as React from 'react';

export class Footer extends React.Component
{
    render()
    {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <p style={{color: 'white'}}>{this.props.children}</p>
                </div>
            </nav>
        );
    }
}
