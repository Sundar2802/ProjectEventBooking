// Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Nfooter';

const Contact = () => {
  return (
    <div style={{ minHeight: '10vh' }}>
      <Navbar />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '140vh' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or want to discuss your upcoming event? Reach out to us using the form below.
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Name" fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Email" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" multiline rows={4} fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
