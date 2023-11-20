import React from 'react';
import {Typography,Grid, Card, CardContent } from '@mui/material';
const EventBox = ({ title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EventBox;
