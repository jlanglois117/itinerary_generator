import React from 'react';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';
import './Content.css'

function Content() {
    return (
        <div class = 'body'>
         <Login />
		 <CreateAccount />
        </div>
    );
}

export default Content;