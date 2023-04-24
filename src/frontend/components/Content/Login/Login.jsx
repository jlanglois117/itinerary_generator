import React,{useState} from 'react' 
import './Login.css'


function Login(){ 
   
	const [email,setEmail]=useState(""); 
	const [password,setpassword]=useState(""); 
	const [error, setError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	
	//const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		if (password === '' || email === '') {
			setError(true);
		}
		else{
			const info={email:email,password:password}; 
			setSubmitted(true);
			setError(false);
		}
		//setDataInput([info]);
	}

	const errorMessage = (e) => {
		
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

	return(
        
	<div className = "tile">
		<form> 
            <div>
                <h1>Login</h1>
            </div>

			<div className="messages">
				{errorMessage()}

			</div>

			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="password">Password</label>
			<input type="text" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/> 
			</div>  
			<button onClick={submitThis} type="submit">Login</button>
		</form>
	</div>
)} 


export default Login;