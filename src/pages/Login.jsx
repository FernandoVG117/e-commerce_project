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
          <div className='login__container'>
            <h2 className='login__title'><span>LOGIN</span></h2>

            <div className='login__test'>
              <span>Test Users</span>
              <span>email: coco@email.com</span>
              <span>password: 12345</span>
            </div>

            <form onSubmit={handleSubmit(submit)} className='login__form'>

            {/*
              <div className='login__email'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id='email' />
              </div>
              <div className='login__password'>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" id='password' />
              </div>
            */}
            
            <div>
              <label htmlFor="email" className='login__label'>
                <input type="email" {...register('email')} placeholder=' ' id='email' className='login__input'/>
                <span className='label__name'>Enter your email here.</span>
              </label>
            </div>
            <div>
              <label htmlFor="password" className='login__label'>
                <input type="password" {...register('password')} placeholder=' ' id='password' className='login__input'/>
                <span className='label__name'>Enter your password here.</span>
              </label>
            </div>

              <button className='login__btn'>Log in</button>
            </form>
            <p className='login__text'>If you are not register yet, please <Link to={'/register'}>register here</Link>.</p>
          </div>
      }
    </div>    
    
  )
}

export default Login