import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../Redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';
import Snack from '../../components/snackbar';
import FacebookSignUp from "./facebooksignup"
import {useState } from "react";


 function SignUp(props) {
    const paises = [
        "unselected",
        "Argentina",
        "Japan",
        "Colombia",
        "Chile",
        "South Korea",
        "Venezuela",
        "Spain",
        "Perú",
        "United States",
      ];
    
      const [selectPaises, setSelectPaises] = useState("unselected");
    
      function select(event) {
        console.log(event.target.value);
        setSelectPaises(event.target.value);
      }

        console.log(props)
        
    const handleSubmit = (event) => {
        event.preventDefault()   
        console.log(event.target.value)
        const userData={
            name:event.target[0].value,
            surname:event.target[1].value,
            email:event.target[2].value,
            password:event.target[3].value,
            picture:event.target[4].value,
            country: selectPaises,

            from:"form-Signup",
            
        }
        props.signUpUser(userData)
        
    }
   
    return (

      <>
<div className='d-flex flex-column justify-content-center align-items-center' >
    <div>
          <h2 className="mt-3 text-center">
            Select your country
          </h2>
        </div>
        <div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={select}
          >
            {paises.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          </div>
          {selectPaises !== "unselected" ? (
        <section>       

        <Snack/>
        <h1 className='mb-5 mt-5'>Create a new User</h1>
        <h2 className='mb-5'>Using Facebook</h2>
        <FacebookSignUp country={selectPaises}/>
        <h2>Or with our Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name="Name" className="form-control mb-3" placeholder="Name" type="text" required />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name="Surname" className="form-control mb-3" placeholder="Surname" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                   
                </div>
                <input name="email" className="form-control mb-3" placeholder="Email address" type="email" required />
            </div>
        
            
            
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                <input name='password' className="form-control mb-3" placeholder="password" type="password" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    
                </div>
                   <input name="picture" className="form-control mb-3" placeholder="img url" type="text" />
                </div>
         
            <div className="form-group d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary btn-block mt-3"> Create Account  </button>
            </div>
            <div className="text-center mt-3">Do you have an existing account? <LinkRouter to="/signin">SignIn</LinkRouter> </div>
        </form>
        </section>    
        ) : (
            <h3>Select your country to proceed with the SignUp</h3>
          )}
        </div>
        </> 
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