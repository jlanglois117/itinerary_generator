import React from 'react';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';

import './Content.css'

function LoginContent() {
    return (
        <div className = 'body'>
         <div className = 'child'>
         <Login />
         </div>
         <div className = 'child'>
		 <CreateAccount />
         </div>
        </div>
    );
}

export default LoginContent;