import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
  onClick(e, req) {
    axios
      .get('http://localhost:4000/user')
      .then((req) => req.logout())
      .catch((err) => console.log(err));

    console.log('You signed out');
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <a className="nav-link active" onClick={this.onClick} href="/">
            Logout
          </a>
        </nav>
      </div>
    );
  }
}
