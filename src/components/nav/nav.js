import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"
import logo from "../assets/logo.png"
import userID from "../assets/user.png"
import { connect } from 'react-redux';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
import userActions from '../../Redux/actions/userActions';



const NavBar = (props) => {
  console.log(props.user)
  function SignOut() {

		props.SignOutUser(props.user.email)
	}
 
  return (
    <AppBar position="static" className='navpad'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       

     
          
          <Box className='boxnav NavBar' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'} }}>
          
         <div  className="navorder">
            <img className='logo' src={logo} alt="logo"/> 
            <div >
            <LinkRouter to="/" className='link'>
              <Button color="inherit">Home</Button>
              </LinkRouter> 
              <LinkRouter to="/cities" className='link'>
              <Button color="inherit">Cities</Button>
              </LinkRouter>
           
            </div>      
         </div>
         {props.user ? 
         <div className="navorder me-3">
         
            <div>
              <Button onClick={SignOut} color="inherit">SignOut </Button>
             
            </div>

          {/*   <div>Logged as {props.user.name}</div> */}
            {/* <img className='userlogo' src={props.user.picture} alt={"Logged as " + props.user.name + props.user.surname} /> */}
            {props.user ?
            <img className='imageNav' src={props.user.picture} alt={"Logged as " + props.user.name + props.user.surname} />
            :
            <img className='userlogo' src={userID} alt="logo" /> }
            
            
         </div>
         : <div className="navorder">
         
         <div>
         <LinkRouter to="/signup" className='link'>
           <Button color="inherit">SignUp</Button>
           </LinkRouter>
           <LinkRouter to="/signin" className='link'>
           <Button color="inherit">SignIn</Button>
           </LinkRouter>
         </div>
         <img className='userlogo' src={userID} alt="logo" /> 
         
         
      </div>}
          
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar)