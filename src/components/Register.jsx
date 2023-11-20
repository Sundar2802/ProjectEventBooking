import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box} from '@mui/material';
import backgroundImage from "E:\\pexels-monstera-production-5709009.jpg";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Form submitted with data:', formData);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              autoFocus
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!passwordError}
              helperText={passwordError}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              disabled={passwordError}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
