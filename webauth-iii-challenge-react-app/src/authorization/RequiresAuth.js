import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('jwt')

axios.defaults.baseURL = "http://localhost:5000/api"; //may or may not use

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const notLoggedIn = <div>Login to view list of users</div>

            return (<div>{token ? <Component {...this.props} /> : notLoggedIn} </div>);

        }
    };
}
