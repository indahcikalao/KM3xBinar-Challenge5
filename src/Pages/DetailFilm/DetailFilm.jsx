import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BsStar } from 'react-icons/bs';
import { Card, CardMedia, Grid, Button } from '@mui/material';
import Trailer from '../../Components/Trailer/Trailer';
import './DetailFilm.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/actions/movieAction';

export default function DetailFilm() {
  const params = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.detail);

  const BASE_IMG = 'https://image.tmdb.org/t/p/original';
  const rating = Math.round((movies?.vote_average * 100) / 2) / 100;
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

  useEffect(() => {
    if (params.id) {
      dispatch(getMovieDetail(params.id));
    }
  }, [params.id, dispatch]);

  return (
    <>
      {movies && (
        <div className="detail">
          <Card style={styles.card}>
            <CardMedia
              image={`${BASE_IMG}/${movies.backdrop_path}`}
              style={styles.media}
            />

            <Grid container style={styles.overlay} alignItems="center">
              <div style={{ padding: '0 5em' }}>
                <Grid item md={6} sm={12} xs={12} className="card">
                  <h1
                    style={{
                      margin: '20px 0',
                      fontSize: '60px',
                      lineHeight: '1',
                    }}>
                    {movies.title}
                  </h1>
                </Grid>
                {movies.genres.map((item) => (
                  <Button
                    key={item.id}
                    variant="outlined"
                    color="secondary"
                    style={{ minWidth: '100px', marginRight: '5px' }}>
                    {item.name}
                  </Button>
                ))}
                <p style={{ margin: '10px 0' }}>
                  <BsStar style={{ marginRight: '10px' }} />
                  {rating} / 5
                </p>
                <Grid item md={6} sm={12} xs={12} className="card">
                  <p style={{ fontSize: '16px', marginTop: '0' }}>
                    {movies.overview}
                  </p>
                </Grid>

                <Trailer key={movies.id} movie={movies} />
              </div>
            </Grid>
          </Card>
        </div>
      )}
    </>
  );
}
