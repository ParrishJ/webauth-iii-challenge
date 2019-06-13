import React from 'react';
import axios from 'axios';

import '../authorization/interceptors';
import RequiresAuth from '../authorization/RequiresAuth';

class UserList extends React.Component {
    state = {
        users: [],
    };

    render() {
        return (
            <div>
                <h1>Users</h1>

                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}, {user.department}</li>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const endpoint = '/users';

        axios
            .get(endpoint)
            .then(res => {
                console.log('users', res.data)
                this.setState(() => ({ users: res.data }));
            })
            .catch(({ response }) => {
                console.error('Error: users', response);
            });
    }
}

export default RequiresAuth(UserList);