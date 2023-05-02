import React from 'react';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';

import './Content.css'

function LoginContent() {
    return (
        <div class = 'body'>
         
         <Login />
		 <CreateAccount />
         
        </div>
    );
}

export default LoginContent;