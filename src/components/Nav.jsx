import React from 'react';
import './NavStyle.css';
import {Link} from 'react-router-dom';


const Nav = () => {

  const navStyle = {
    color: "whitesmoke",
    textDecoration: 'none'
  }

  return (
    <div className="navbar">
      <ul >
        <li><Link style={navStyle} to='/home'>Home</Link></li>
        <li><Link style={navStyle} to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default Nav;