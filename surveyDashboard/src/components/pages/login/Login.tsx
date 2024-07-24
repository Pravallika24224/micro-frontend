import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routePaths from '../../../assets/routePaths';
import { useAuth } from 'surveyDashboard/authContext';
import InputBox from '../../atoms/InputBox';
import Header from '../../organism/Header';
import login from '../../../jsonData/login.json'

const Login = () => {
  const {auth, updateAuth} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    for(let i = 0 ; i < login.length; i++) {
      if(username === login[i].userName && password === login[i].password) {
        if(login[i].type === 'admin') {
        updateAuth(true, 'admin', login[i].id)
        }
        if(login[i].type === 'user') {
          updateAuth(true, 'user', login[i].id)
        }
        navigate(routePaths.dashboard);
      }
    }
  };

  return (
    <div className='bg-gray-200 w-screen flex justify-center'>
      <div className='flex flex-col justify-center w-96'>
        <div className='rounded-lg bg-white text-center p-2 h-fit px-4 border shadow-lg'>
          <div className='text-3xl font-bold pt-4'>Sign In</div>
          <div className='text-slate-500 text-md pt-1 px-4 pb-4'>
            Enter your credentials to access your account
          </div>
          <InputBox
            label='Username'
            placeholder='User Name'
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <InputBox
            label='Password'
            placeholder='Password'
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button
            className='w-full rounded-lg h-10 text-sm bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 me-2 mb-2'
            onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
