import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      username: '',
      email: '',
      password: ''
    };
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin,
      username: '',
      email: '',
      password: ''
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { isLogin, username, email, password } = this.state;
    if (isLogin) {
      console.log('Logging in with:', { username, password });
    } else {
      console.log('Signing up with:', { username, email, password });
    }
  };

  render() {
    const { isLogin, username, email, password } = this.state;

    return (
      <div className="login-wrapper">
        <div className="form-container">
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSubmit}>Login</button>
              <p onClick={this.toggleForm} className="toggle-link">
                Don't have an account? Sign Up
              </p>
            </div>
          ) : (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <button onClick={this.handleSubmit}>Sign Up</button>
              <p onClick={this.toggleForm} className="toggle-link">
                Already have an account? Login
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
