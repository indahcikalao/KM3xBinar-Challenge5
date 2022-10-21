import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Divider,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import './Register.scss';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import Success from '../../Components/Success/Success';
import PopUp from '../../Components/PopUp/PopUp';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '') {
      setMessage('Full Name is Required');
      setError(true);
      return;
    }
    if (email === '') {
      setMessage('Email is Required');
      setError(true);
      return;
    }
    if (password === '') {
      setMessage('Password is Required');
      setError(true);
      return;
    }
    if (email !== '' && password !== '' && name !== '') {
      const data = {
        name,
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`,
          data
        );
        if (result.data.token) {
          localStorage.setItem('token', result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Container sx={{ paddingTop: 15 }}>
      {error ? <PopUp message={message} /> : ''}
      {token ? (
        <Success setToken={setToken} label="Register" />
      ) : (
        <Grid container justifyContent="center">
          <Grid
            item
            sm={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
              alt="movie"
              style={{ maxWidth: '300px' }}
            />
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1243/1243277.png"
                alt="movie"
                style={{ maxWidth: '40px' }}
              />
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}>
                              {!showPassword ? (
                                <BsEyeFill />
                              ) : (
                                <BsEyeSlashFill />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  disabled={!email || !name || !password}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    setError(false);
                  }}>
                  Register
                </Button>

                <Divider>or continue with</Divider>
                <GoogleLogin setToken={setToken} />

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
