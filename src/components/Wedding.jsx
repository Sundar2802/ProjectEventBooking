// WeddingEvent.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Navbar from './Navbar';
import EventBox from './Eventbox';
import Footer from './Nfooter';

const WeddingEvent = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Wedding Events
        </Typography>
        <Typography variant="body8" paragraph>
          Plan and celebrate your wedding with ease. From ceremonies to receptions, we've got everything you need for a perfect wedding day.
        </Typography>
        <Grid container spacing={1}>
          <EventBox title="Ceremony" description="Create magical moments with our expertly planned wedding ceremonies." />
          <EventBox title="Reception" description="Celebrate the union with a joyful reception that reflects your style and preferences." />
          <EventBox title="Engagement Party" description="Kick off the wedding festivities with a memorable engagement party." />
          <EventBox title="Bridal Shower" description="Honor the bride-to-be with a beautiful and thoughtful bridal shower event." />
          {/* Add more EventBox components as needed for different wedding events */}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default WeddingEvent;
