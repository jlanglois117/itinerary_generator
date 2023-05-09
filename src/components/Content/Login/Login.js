import React,{useState} from 'react' 
import './Login.css'
import axios from 'axios';
import Validation from './LoginValidation';
import { Link, useNavigate } from 'react-router-dom';


function Login(){ 
   
	const [values, setValues] = useState({
		email: '',
		password: '',
		fname: '',
		lname: '',
		username: '',
		id: ''
	})

	

	const navigate = useNavigate();
	const [user, setUser] = useState();
	const [errors, setErrors] = useState({})
	const [backendError, setBackendError] = useState([])
	//const history = useHistory();

	const handleInput = (event) => {
		setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const err = (Validation(values));
		setErrors(err);
		if(err.email === "" && err.password === ""){
			const response = axios.post('http://localhost:3306/login', values)
			.then(res => {
				if(res.data.errors) {                    
					setBackendError(res.data.errors);                
				} 
				else {                    
					setBackendError([]);
					if(res.data === "Success") {
						setUser(response.data);
						localStorage.setItem('email', values.email) 
						   
						navigate('/account');                    
					} 
					else {                        
						alert("Account doesn't exist");                    
					}                
				}                            
			}) 
		         
			.catch(err => console.log(err));


			axios.get('http://localhost:3306/userData', values)
            .then(response => {
                try{
                    setValues(response.data);
					localStorage.setItem('id', values.id);
					localStorage.setItem('fname', values.fname);
					localStorage.setItem('lname', values.lname);
					localStorage.setItem('username', values.username);


                    
                }catch(error){
                    console.log('error in parsing,', error);
                }
            })
            .catch(error => console.log('error in data retrieval,', error));

		}    
	}

    


	return(
        
	<div className = "tile">
		<div>
			<h1>Login</h1>
         </div>
		 {backendError ? backendError.map( e => (<p className='message'>{e.msg}</p>)) : <span></span>}
		<form action = "" onSubmit={handleSubmit}> 
            

			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" onChange={handleInput}/> 
			</div> 
			<div> 
				<label htmlFor="password">Password</label>
			<input type="password" name="password" onChange={handleInput}/> 
			{errors.password && <span className='message'> {errors.password}</span>}
			</div>  
			<button type="submit">Login</button>
		</form>
	</div>
)} 


export default Login;