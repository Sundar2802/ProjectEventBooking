// SportingEvent.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';

const SportingEvent = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Sporting Events
        </Typography>
        <Typography variant="body8" paragraph>
          Plan and execute exciting sporting events with our professional event management services. From tournaments to sports day events, we've got your sports needs covered.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Tournaments" description="Organize competitive tournaments that bring together athletes and enthusiasts." />
          <EventBox title="Cricket Matches" description="Host thrilling cricket matches with our expert event planning solutions." />
          <EventBox title="Sports Day Events" description="Celebrate athleticism and team spirit with well-coordinated sports day events." />
          {/* Add more EventBox components as needed for different sporting events */}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SportingEvent;
