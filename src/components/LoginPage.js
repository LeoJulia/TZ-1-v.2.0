import React from 'react';
import '../style/LoginPage.css';

function LoginPage(props){
  return (
    <div className='login'>
      <h1>LogIn</h1>
      <label className='input'>
        Username: 
        <input type='text' />
      </label>
      <label className='input'>
        Password: 
        <input type='password' />
      </label>
    </div>
  )
}

export default LoginPage;
