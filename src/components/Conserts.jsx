// ConcertsAndPerformances.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';

const Concerts = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Concerts and Performances
        </Typography>
        <Typography variant="body8" paragraph>
          Immerse yourself in the world of music and entertainment. Discover our concerts and performances that promise unforgettable experiences.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Music Concerts" description="Experience the magic of live music with our captivating concerts." />
          <EventBox title="Dance Performances" description="Be mesmerized by breathtaking dance performances from talented artists." />
          {/* Add more EventBox components as needed for different concerts and performances */}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Concerts;
