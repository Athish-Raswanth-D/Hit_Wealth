import React, { Component } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the import path based on your file structure
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      username: '',
      password: '',
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      username: '',
      password: '',
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    const { isLogin, username, password } = this.state;

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (isLogin) {
        // Firebase login
        await signInWithEmailAndPassword(auth, username, password);
        alert(`Welcome back ${username}`);
      } else {
        // Firebase sign-up
        await createUserWithEmailAndPassword(auth, username, password);
        alert(`Account created for: ${username}`);
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  render() {
    const { isLogin, username, password } = this.state;

    return (
      <div className="login-wrapper">
        <div className="form-container">
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <input
                type="text"
                name="username"
                placeholder="Email"
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
                placeholder="Email"
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