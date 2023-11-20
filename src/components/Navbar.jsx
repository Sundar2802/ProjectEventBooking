
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


import eventImage from 'E:\\event-planning3-edited.jpg'; 
import EventBox from './Eventbox';
import Footer from './Nfooter';


const Navbar = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <h2>EVENT MANAGEMENT</h2>
          <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          </Typography>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <Link to='/Login'><Button variant="outlined" sx={{marginRight:"10px"}}>Login</Button></Link>
          <Avatar sx={{ bgcolor: 'deepOrange[500]' }}><AccountCircleOutlinedIcon/></Avatar>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        
        <img src={eventImage} alt="Event Management" style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }} />

        <Typography variant="h4" gutterBottom>
          Welcome to Our Event Management Platform
        </Typography>
        <Typography variant="body8" paragraph>
          Plan and book your events with ease. From weddings to corporate gatherings, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our services and make your event unforgettable!
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Social Event" description="Birthday parties,Anniversary celebrations,Graduation parties" />
          <EventBox title="Wedding" description="Ceremony,Reception,Engagement party,Bridal shower etc.." />
          <EventBox title="Corporate Events" description="Conferences,Seminars,Workshops,Team-building events,Product launches" />
          <EventBox title="Concerts and Performances" description="Music concerts,Dance performances" />
          <EventBox title="Sporting Events" description="Tournaments,Matches,Sports day events" />
          <EventBox title="Holiday Events" description="Christmas parties,New Year's Eve celebrations" />
        </Grid>
      </Container>
      <Footer/>
      
    </div>
  );
};

export default Navbar;
