// CorporateEvent.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';

const CorporateEvent = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Corporate Events
        </Typography>
        <Typography variant="body8" paragraph>
          Organize successful corporate events with our professional planning services. From conferences to product launches, we've got your business needs covered.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Conferences" description="Host impactful conferences with our comprehensive event planning services." />
          <EventBox title="Seminars" description="Engage your audience with well-organized and informative seminars." />
          <EventBox title="Workshops" description="Facilitate learning and collaboration with expertly planned workshops." />
          <EventBox title="Team-building Events" description="Foster team spirit and unity with our team-building event solutions." />
          <EventBox title="Product Launches" description="Introduce your products to the market with a successful and memorable launch event." />
          {/* Add more EventBox components as needed for different corporate events */}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default CorporateEvent;
