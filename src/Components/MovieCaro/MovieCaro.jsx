import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import Trailer from '../Trailer/Trailer';

export default function MovieCaro({ movie }) {
  const BASE_IMG = 'https://image.tmdb.org/t/p/original';
  const styles = {
    media: {
      height: '100vh',
      width: '100vw',
    },
    card: {
      position: 'relative',
      borderRadius: '0',
    },
    overlay: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100vh',
      width: '100vw',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };
  return (
    <div>
      <Card style={styles.card}>
        <CardMedia
          image={`${BASE_IMG}/${movie.backdrop_path}`}
          style={styles.media}
        />
        <div>
          <Grid container style={styles.overlay} alignItems="center">
            <div style={{ padding: '0 5em' }}>
              <Grid item md={8} sm={12} xs={12} className="card">
                <h1 style={{ margin: '0', fontSize: '60px', lineHeight: '1' }}>
                  {movie.title}
                </h1>
              </Grid>
              <Grid item md={8} sm={12} xs={12} className="card">
                <p style={{ fontSize: '16px' }}>{movie.overview}</p>
              </Grid>
              <Trailer key={movie.id} movie={movie} />
            </div>
          </Grid>
        </div>
      </Card>
    </div>
  );
}
