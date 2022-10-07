import { Link } from 'react-router-dom';
import React from 'react';
import './MovieCard.scss';
import { Grid } from '@mui/material';

export default function MovieCard({ movie }) {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <Grid item lg={2} md={3} sm={4} className="card">
      <Link to={`/detail/${movie.id}`}>
        <img
          src={`${BASE_IMG}/${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
          style={{ borderRadius: '7px' }}
        />
      </Link>
    </Grid>
  );
}
