import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        department: '',
    };

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInput}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInput}
                            type="password"
                        />
                    </div>
                    <div>
                        <label htmlFor="department">department</label>
                        <input
                            id="department"
                            value={this.state.department}
                            onChange={this.handleInput}
                            type="text"
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }

    handleInput = e => {
        const { id, value } = e.target;

        this.setState({ [id]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:5000/api/register';
        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                console.log('token', res.data)
                this.props.history.push('/users');
            })
            .catch(error => {
                console.error('ERROR', error);
            });
    };

}