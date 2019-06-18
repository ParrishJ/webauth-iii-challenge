import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import Login from './authorization/Login';
import UserList from './users/UserList';
import SignUp from './authorization/SignUp';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink className="navLink" to='/signup'>sign up</NavLink>
            <NavLink className="navLink" to='/users'>Users</NavLink>
            <NavLink className="navLink" to='/login'>login</NavLink>

            <button onClick={this.signout}>Signout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </main>
      </div>
    );
  }

  signout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };

}

export default withRouter(App);
