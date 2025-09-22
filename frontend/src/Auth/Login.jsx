import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './style.css';

function Login({ setIsAuthenticated }) {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      const url = `${import.meta.env.VITE_REACT_APP_REACT_API}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);

        // Save token + user
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setIsAuthenticated(true);

        // figure out where to redirect
        const redirectPath = location.state?.from?.pathname ;

        setTimeout(() => {
          navigate(redirectPath, { replace: true });
        }, 1000);

      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details || 'An unknown error occurred');
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError('Failed to connect to the server.');
      console.error(err);
    }
  };

  return (
    <div id='outer' className='mt-20'>
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='Enter your email...'
              value={loginInfo.email}
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Enter your password...'
              value={loginInfo.password}
            />
          </div>
          <button id='but' type='submit'>Login</button>
          <span>
            Don't have an account?{' '}
            <Link className='underline' to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
