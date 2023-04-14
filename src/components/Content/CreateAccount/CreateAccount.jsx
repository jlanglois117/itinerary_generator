import React,{useState} from 'react' 
import '../Login/Login.css'

function CreateAccount(){ 

// States for registration
const [fname, setFName] = useState('');
const [lname, setLName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleFName = (e) => {
setFName(e.target.value);
setSubmitted(false);
};

const handleLName = (e) => {
    setLName(e.target.value);
    setSubmitted(false);
    };

const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
    };

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (fname === '' || email === '' || password === '' || lname === '' || username === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Logs in


// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please fill out all fields</h1>
</div>
);
};

return (
<div className="tile">
<div>
<h1>Create Account</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}

</div>

<form>
{/* Labels and inputs for form data */}
<div>
<label className="label">First Name</label>
<input onChange={handleFName} className="input"
value={fname} type="text" />
</div>

<div>
<label className="label">Last Name</label>
<input onChange={handleLName} className="input"
value={lname} type="text" />
</div>

<div>
<label className="label">Username</label>
<input onChange={handleUsername} className="input"
value={username} type="text" />
</div>

<div>
<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />
</div>

<div>
<label className="label">Password</label>
<input onChange={handlePassword} className="input"
value={password} type="password" />
</div>

<button onClick={handleSubmit} className="btn" type="submit">
Create
</button>
</form>

</div>
);
}

export default CreateAccount;