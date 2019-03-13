import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    msg: null
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };
    console.log(newUser);

    // Attempt to register
    axios
      .post('http://localhost:4000/todos/', newUser)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h3>Register Here For Full Access</h3>
        <form onSubmit={this.onSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mb-3"
            onChange={this.onChange}
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mb-3"
            onChange={this.onChange}
          />

          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="mb-3"
            onChange={this.onChange}
          />
          <button color="dark" style={{ marginTop: '2rem' }}>
            Register
          </button>
        </form>
      </div>
    );
  }
}
