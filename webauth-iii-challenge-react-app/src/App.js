import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';

import Login from './authorization/Login'
import UserList from './users/UserList'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'>login</NavLink>

            <button onClick={this.signout}>Signout</button>
          </nav>
        </header>
        <main>
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
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
//test