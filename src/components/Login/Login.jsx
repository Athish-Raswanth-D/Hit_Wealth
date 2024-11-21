import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }

  toggleForm = () => {
    this.setState(prevState => ({
      isLogin: !prevState.isLogin
    }));
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div className="container">
        <div className="form-container">
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
              <p onClick={this.toggleForm} className="toggle-link">Don't have an account? Sign Up</p>
            </div>
          ) : (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
              <p onClick={this.toggleForm} className="toggle-link">Already have an account? Login</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;