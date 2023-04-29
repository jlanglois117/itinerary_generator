import React, { useEffect } from 'react';
import './Header.css';
import Logo from './WLogo3_Clipped.png';

const Header = () => {
    
    return (
        <div className='Container'>
            <a href='/home'>
                <h1>Wisconcity</h1>
                <img src={Logo} />
            </a>
            <div className='links'>
                <a href='/home'>Home</a>
                <a href='/login'>Login</a>
                <a href='/account'>Profile</a>
            </div>
        </div>
    );
  }

export default Header;