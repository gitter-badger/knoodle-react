import * as React from 'react';
import {store} from './../redux/store';

export class FlashMessages extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {notifications: []};
        this.unsubscribe = null;
    }

    componentDidMount()
    {
        this.setState({notifications: store.getState().notifications});

        this.unsubscribe = store.subscribe(() => console.log(store.getState()) || this.setState({notifications: store.getState().notifications}));
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    render()
    {
        if (!this.state.notifications.length) {
            return null;
        }

        return (
            <div className="notifications">
                {this.state.notifications.map(notification => (
                    <div className={`alert alert-${notification.kind} alert-dismissible`} role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        {notification.message}
                    </div>
                ))}
            </div>
        );
    }
}
