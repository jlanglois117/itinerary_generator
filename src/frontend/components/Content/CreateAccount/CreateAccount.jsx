import React,{useState} from 'react' 
import '../Login/Login.css'
import Axios from 'axios';


function CreateAccount(){ 


const [fname, setFName] = useState('');
const [lname, setLName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const register = () =>{
    Axios.post("https://localhost3000/login",{
        fname: setFName,
        lname: setLName,
        username: setUsername,
        email: setEmail,
        password: setPassword,
    })
};


// Handling the form submission
const submitThis = (e) => {
e.preventDefault();
if (fname === '' || email === '' || password === '' || lname === '' || username === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
const info={fname:fname, lname:lname, username:username, email:email, password:password}; 
		
}
};


// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h2>Please fill out all fields</h2>
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
<label htmlFor="fname">First Name</label>
<input type="text" name="fname" id="fname" value={fname} onChange={(e)=>setFName(e.target.value)}/> 
</div>

<div>
<label htmlFor="lname">Last Name</label>
<input type="text" name="lname" id="lname" value={lname} onChange={(e)=>setLName(e.target.value)}/>
</div>

<div>
<label htmlFor="username">Username</label>
<input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
</div>

<div>
<label htmlFor="email">Email</label>
<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div>
<label htmlFor="password">Password</label>
<input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button onClick={register} className="btn" type="submit">
Create
</button>
</form>

</div>
);
}



export default CreateAccount;