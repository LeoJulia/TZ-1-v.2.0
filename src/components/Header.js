import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../style/Header.css';

function Header(){
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/login">Lig In</Link>
      </li>
    </ul>
  );
}

export default Header;
