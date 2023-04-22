import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = 'Container'>
        <h1>Wisconcity</h1> 
        <div className = 'links'>
        <a href= "/home">Home</a>
        <a href= "/login">Login</a>
        <a href = "/account">Profile</a>
        </div>
        </div>

    );
}

export default Header;