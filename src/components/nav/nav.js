import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"
import logo from "../assets/logo.png"
import userID from "../assets/user.png"

/* const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']; */

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" className='navpad'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <MenuItem>
               <LinkRouter to="carrousel" className='linkresp'> Cities </LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="cards" className='linkresp'>LogIn</LinkRouter>
              </MenuItem>
              <MenuItem>
                <LinkRouter to="lamp" className='linkresp'>SignUp</LinkRouter>
              </MenuItem>

            </Menu> */}
          </Box>
     
          
          <Box className='boxnav NavBar' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'} }}>
          
         <div  className="navorder">
            <img className='logo' src={logo} /> 
            <div >
              <LinkRouter to="/cities" className='link'>
              <Button color="inherit">Cities</Button>
              </LinkRouter>
              <LinkRouter to="/" className='link'>
              <Button color="inherit">Home</Button>
              </LinkRouter> 
            </div>      
         </div>
         <div className="navorder">
            <div>
              <Button color="inherit">SignUp</Button>
              <Button color="inherit">LogIn</Button>
            </div>
            <img className='userlogo' src={userID} /> 
         </div>
          
          </Box>

       
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
