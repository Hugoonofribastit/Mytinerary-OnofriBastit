import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"
import logo from "../assets/logo.png"
import userID from "../assets/user.png"



const NavBar = () => {
 
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
         <div className="navorder">
            <div>
              <Button color="inherit">SignUp</Button>
              <Button color="inherit">LogIn</Button>
            </div>
            <img className='userlogo' src={userID} alt="logo" /> 
         </div>
          
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
