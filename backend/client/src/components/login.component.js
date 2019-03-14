import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    msg: null
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    // Attempt to login
    axios
      .post('http://localhost:4000/user', user)
      .then((res) => console.log('User logged in.'))
      .catch((err) => {
        console.log(err);
        if (err) {
          alert('Incorrect Submission');
        } else {
          this.props.history.push('/');
        }
      });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mb-3"
            onChange={this.onChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="mb-3"
            onChange={this.onChange}
          />
          <button color="dark" style={{ marginTop: '2rem' }}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
