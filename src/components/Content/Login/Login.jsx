import React,{useState} from 'react' 
import './Login.css'
import CreateAccount from '../CreateAccount/CreateAccount';

function Login(){ 
   
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
	}
	return(
        
	<div className = "tile">
		<form action="" onSubmit={submitThis}> 
            <div>
                <h1>Login</h1>
            </div>

			<div> 
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
			<button type="submit">Login</button>
		</form>
	</div>
)} 


export default Login;