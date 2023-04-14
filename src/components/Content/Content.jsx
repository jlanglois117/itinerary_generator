import React from 'react';
import Login from './Login/Login';
import CreateAccount from './CreateAccount/CreateAccount';

function Content() {
    return (
        <div className = 'body'>
         <Login />
		 <CreateAccount />
        </div>
    );
}

export default Content;