import React from 'react';
import './Header.scss';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';
import SearchBar from '../SearhBar/SearhBar';

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <Container>
          <nav>
            <Link to="/">MovieList</Link>

            <SearchBar />

            <div>
              <Button
                className="buttons"
                variant="outlined"
                onClick={() => {
                  navigate('/login');
                }}>
                Login
              </Button>
              <Button
                className="buttons"
                variant="contained"
                onClick={() => {
                  navigate('/register');
                }}>
                Register
              </Button>
            </div>
          </nav>
        </Container>
      </div>
      <Outlet />

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 4, mb: 4 }}>
        {
          'Kampus Merdeka 3 X Binar Academy - Challenge Chapter 5 - Copyright © indahcikalao '
        }
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}
