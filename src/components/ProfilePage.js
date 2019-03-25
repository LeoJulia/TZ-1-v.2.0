import React from 'react';
import '../style/ProfilePage.css';

function ProfilePage(props){
  return (
    <div className="profile">
      <img
        className="profile__photo"
        src="https://i.imgur.com/KqoXxOd.jpg"
        alt="avatar"
      />
      Profile
      <div className='profile__bio'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ultrices, ligula at cursus varius, erat orci iaculis dolor, at
        fermentum leo mauris vel est. Pellentesque blandit tortor elit, ut
        accumsan est rutrum nec. Sed consequat risus quis nulla varius
        sollicitudin. Sed sagittis, orci finibus eleifend dignissim, lectus
        elit consequat metus, a efficitur nisl sem vitae ex. Sed in luctus
        metus, in blandit urna. Pellentesque tempor tristique neque id
        pretium. Quisque interdum eu quam ac lobortis. Suspendisse et
        scelerisque eros. Suspendisse maximus justo at lacinia interdum. In
        hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </div>
    </div>
  );
}

export default ProfilePage;
