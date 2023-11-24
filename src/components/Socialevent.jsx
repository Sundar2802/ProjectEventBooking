// SocialEvent.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';
const SocialEvent = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }}>
        <Typography variant="h4" gutterBottom >
          Social Events
        </Typography>
        <Typography variant="body5" paragraph>
          Explore and plan your social events with ease. From birthday parties to anniversary celebrations, we've got you covered.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Birthday Parties" description="Celebrate the joyous occasion of birthdays with our expert event planning services." />
          <EventBox title="Anniversary Celebrations" description="Make your anniversaries memorable with our special event arrangements." />
          <EventBox title="Graduation Parties" description="Celebrate academic achievements with unforgettable graduation parties." />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SocialEvent;
