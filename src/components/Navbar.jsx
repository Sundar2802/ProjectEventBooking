import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, ButtonGroup, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Navbar = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <div style={{textAlign:"left",width:"950px",fontSize:"40px",fontFamily:"Copperplate"}}>PrestigePlanners</div>
          </div>
          <ButtonGroup variant="text" aria-label="text button group" sx={{marginRight:"70px"}}>
            <Link to='/' color='inherit'><Typography color='white'><Button color="inherit" href="#home">Home</Button></Typography></Link>
            <Link to='/About' color='inherit'><Typography color='white'><Button color="inherit" href="#about">About</Button></Typography></Link>
            <Link to='/Feedback' color='inherit'><Typography color='white'><Button color="inherit" href="#feedback">Feedback</Button></Typography></Link>
            <Link to='/Login'><Button variant="outlined" >Login</Button></Link>
          </ButtonGroup>
            <Avatar sx={{ bgcolor: 'deepOrange[500]' }}><AccountCircleOutlinedIcon/></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
