import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../Redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';
import paises from "../../components/paises"
import Snack from '../../components/snackbar';
import FacebookSignUp from "./facebooksignup"

 function SignUp(props) {
console.log(props)
    const handleSubmit = (event) => {
        event.preventDefault()
console.log(event.target)
        const userData={
            name:event.target[0].value,
            surname:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            from:"form-Signup"
        }
        props.signUpUser(userData)
        
    }
   
    return (

       
<div className='d-flex flex-column justify-content-center align-items-center' >

    <Snack/>
        <h1 className='mb-5 mt-5'>Create a new User</h1>
        <h2 className='mb-5'>Using Facebook</h2>
        <FacebookSignUp/>
        <h2>Or with our Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name="Name" className="form-control mb-3" placeholder="Name" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name="Surname" className="form-control mb-3" placeholder="Surname" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                   
                </div>
                <input name="email" className="form-control mb-3" placeholder="Email address" type="email" />
            </div>
        
            
            
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name='password' className="form-control mb-3" placeholder="password" type="password" />
            </div>
            <label>Select Your country</label>
            <select className="form-select mb-3" aria-label="Default select example">
               
                {paises.map(pais =>
                <option key={pais.name} value={pais.value}>{pais.name}</option>
                )}
            </select>

            <div className="form-group d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary btn-block mt-3"> Create Account  </button>
            </div>
            <div className="text-center mt-3">Do you have an existing account? <LinkRouter to="/signin">SignIn</LinkRouter> </div>
        </form>
        </div>
    )

}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
    
}
const mapStateToProps = (state) => {
	return {
		message: state.userReducer.message,
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);