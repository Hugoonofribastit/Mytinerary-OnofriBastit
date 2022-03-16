import './styleSign.css'
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../Redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Container from './container';
import Snack from '../../components/snackbar';


function SignIn(props) {
console.log(props)
	const handleSubmit = (event) => {
		event.preventDefault()
		const loggedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signin"
		}
		props.signInUser(loggedUser)
	}

	return (
<div className='d-flex flex-column justify-content-center align-items-center' >
<Snack/>
<Container/>
		<form onSubmit={handleSubmit}>
			<div className="form-group input-group">
				<div className="input-group-prepend">
				
				</div>
				<input name="email" className="form-control mb-3" placeholder="Email address" type="email" />
			</div>
			<div className="form-group input-group">
				<div className="input-group-prepend">
					
				</div>
				<input name='password' className="form-control" placeholder="Create password" type="password" />
			</div>

			<div className="form-group">
				<button type="submit" className="btn btn-primary btn-block mt-5 mb-3"> SignIn  </button>
			</div>
			<div className="text-center">Dont you have an account? Please <LinkRouter to="/signup">SignUp</LinkRouter> </div>
		</form>

		</div>
	)

}

const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}

const mapStateToProps = (state)=>{
	return {
		userReducer: state.userReducer.user,
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);