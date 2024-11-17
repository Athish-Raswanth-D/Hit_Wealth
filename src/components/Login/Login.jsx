import React, { useState } from 'react';
import './Login.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p onClick={toggleForm} className="toggle-link">Don't have an account? Sign Up</p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <p onClick={toggleForm} className="toggle-link">Already have an account? Login</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
