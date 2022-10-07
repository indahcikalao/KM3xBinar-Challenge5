import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import MovieCard from '../../Components/MovieCard/MovieCard';

export default function SearchResult() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('keywords');
  const BASE_ULR = 'https://api.themoviedb.org/3';
  const API_KEY = 'api_key=79749ec83b0a508fa2fb96fa8880ea24';

  useEffect(() => {
    const URL_SEARCH = `${BASE_ULR}/search/movie?${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    axios.get(`${URL_SEARCH}`).then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, [query]);

  const renderMovies = () =>
    data.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return (
    <Container sx={{ pt: '80px' }}>
      <h3>Results of {query}</h3>
      {data.length !== 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {renderMovies()}
        </Grid>
      ) : (
        'Nothing Found'
      )}
    </Container>
  );
}
