import React from 'react'  
// import './login.css'
// import {Link,Redirect} from 'react-router-dom'
//import data from './authData.json'
// userData = require('./authData.json')
import { Login } from "./userFunctions"
// const history = useHistory()

class login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			email:'',
			password:''
		}
	}

	onSubmit(e){
		e.preventDefault();
		const User={
			email:this.state.email,
			password:this.state.password
		}
		// console.log(User)
		Login(User).then(res=>{
			console.log(res)
			if(res.data.status==="success"){
				// alert("logged in successfully..!")
				this.props.history.push('/dashboard')
			}else{
				alert(res)
			}
		})
		this.setState({
			email:'',
			password:''
		})
	}

	render(){
	return (
			  <section className="w-25 container-fluid border mt-5 shadow card" style={{borderRadius:'5%'}}>
				<section className ="p-2">
	            		<form className="form-container pt-3 pb-3" onSubmit={(e)=>{this.onSubmit(e)}}>
	            			<h2 className="font-weight-bolder pb-3">Login</h2>
							<div className="form-group">
								<label>Email address</label>
								<input type="email" placeholder="Email" className="form-control border-dark border-top-0 border-left-0 border-right-0" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" placeholder="Password" className="form-control border-dark border-top-0 border-left-0 border-right-0" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
							</div>
                            {/* <button className="btn btn-primary btn-block">LOGIN</button> */}
                            <button type="submit" className="btn btn-primary btn-block" style={{borderRadius:"30px"}}>LOGIN</button>
                            <div className="pt-3 ml-4"><a href="localhost:3000/" className="ml-5">Forgot password?</a></div>
                        </form>
				</section>
			</section>
		);
	}
}

export default login;