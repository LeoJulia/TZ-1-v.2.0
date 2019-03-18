import React from 'react';

function LoginPage(props){
  return (
    <div className='login'>
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
