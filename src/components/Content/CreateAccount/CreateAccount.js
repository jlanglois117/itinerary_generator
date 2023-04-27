import React,{useState} from 'react' 
import '../Login/Login.css'
import axios from 'axios';
import Validation from '../Login/LoginValidation';
import { Link, useNavigate } from 'react-router';


function CreateAccount(){ 

    const [values, setValues] = useState({
        fname: '',
        lname: '',
        username: '',
		email: '',
		password: ''
	})

	const navigate = useNavigate();
	const [errors, setErrors] = useState({})

	const handleInput = (event) => {
		setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const err = Validation(values);
		setErrors(err);
		if(err.fname === "" && err.lname === "" && err.username === "" &&  err.email === "" && err.password === ""){
			axios.post('http://localhost:3306/login', values)
			.then(res => {
				alert("Success! Please Log In");
			})
			.catch(err => console.log(err));
		}
}


return (
<div className="tile">
<div>
<h1>Create Account</h1>
</div>


<form action ="" onSubmit={handleSubmit} >
{/* Labels and inputs for form data */}
<div>
<label htmlFor="fname">First Name</label>
<input type="text" name="fname" onChange={handleInput}/> 
</div>

<div>
<label htmlFor="lname">Last Name</label>
<input type="text" name="lname" onChange={handleInput}/>
</div>

<div>
<label htmlFor="username">Username</label>
<input type="text" name="username" onChange={handleInput}/>
</div>

<div>
<label htmlFor="email">Email</label>
<input type="text" name="email" onChange={handleInput}/>
</div>

<div>
<label htmlFor="password">Password</label>
<input type="password" name="password" onChange={handleInput}/>
{errors.password && <span className='message'> {errors.password}</span>}
</div>

<button className="btn" type="submit">
Create
</button>
</form>

</div>
);
}



export default CreateAccount;