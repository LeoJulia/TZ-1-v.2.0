import React from 'react';
import '../style/ProfilePage.css';

function ProfilePage(props){
  return(
    <div className='profile'>
      <img className='profile__photo' src='https://i.imgur.com/KqoXxOd.jpg' alt='avatar'/>
      Profile
    </div>
  )
}

export default ProfilePage;
