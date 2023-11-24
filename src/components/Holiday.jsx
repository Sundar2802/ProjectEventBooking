
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';

const HolidayEvent = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Holiday Events
        </Typography>
        <Typography variant="body8" paragraph>
          Celebrate the joy of the holidays with our festive and memorable events. Explore our holiday event offerings below.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Christmas Parties" description="Spread the holiday cheer with our enchanting Christmas party events." />
          <EventBox title="New Year's Eve Celebrations" description="Ring in the new year with style and excitement at our special events." />
          
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HolidayEvent;
