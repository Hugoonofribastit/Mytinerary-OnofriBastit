import React from "react";
import { useEffect } from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from '../src/components/nav/nav'; 
import Cities from '../src/components/cities/cities'
import Details from './components/details/details'
import Home from '../src/components/Home/home'
import Foot from './components/foot/foot' 
import ScrollToTop from './components/Scrolltotop/Scrolltotop' 
import SignIn from './components/SignUp/signin'
import SignUp from './components/SignUp/signup'
import { connect } from 'react-redux';
import userActions from './Redux/actions/userActions';



const App= (props)=> {
 console.log(props.user)
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
     
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
    
      <Nav/>
   
          <Routes>
            {props.user ? (
              <>
              <Route path="/" element={<Home/>}/> 
              <Route path="*" element={<Home/>}/> 
              <Route path="/cities" element={<Cities/>}/>
              <Route path="/details/:id" element={<Details/>}/>
         
          </>
            ):(
              <>
                <Route path="/" element={<Home/>}/> 
                <Route path="*" element={<Home/>}/> 
                <Route path="/cities" element={<Cities/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/> 
              </>
            )}
          </Routes>
  
      <Foot/>
  
    
    </BrowserRouter>
    
    
  );
}



/* const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}



export default connect(null, mapDispatchToProps)(App); */
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
  SignOutUser: userActions.SignOutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
