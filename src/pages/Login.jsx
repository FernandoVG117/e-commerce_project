import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Logout from '../components/logout/Logout';
import './styles/login.css'

const Login = () => {

  const {handleSubmit, register, reset} = useForm();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const submit = async (data) => {
    await useAuth('/users/login', data);
    reset({
      password: '',
      email: '',
    });
    setToken(localStorage.getItem('token'));
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken();
  }

  return (
    <div className='login'>
      {
        token ? 
          <Logout 
            handleLogout={handleLogout}
          />
              :
          <div>
            <form onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id='email' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" id='password' />
              </div>
              <button>Log in</button>
            </form>
            <p>If you are not register yet, please <Link to={'/register'}>register here</Link>.</p>
          </div>
      }
    </div>    
    
  )
}

export default Login