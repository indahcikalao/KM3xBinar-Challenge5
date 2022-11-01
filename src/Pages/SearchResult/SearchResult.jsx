import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import MovieCard from '../../Components/MovieCard/MovieCard';
import { getSearchResults } from '../../redux/actions/movieAction';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('keywords');
  const data = useSelector((state) => state.movie.searchRes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchResults(query));
  }, [query, dispatch]);

  const renderMovies = () =>
    data?.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return (
    <Container sx={{ pt: '80px' }}>
      <h3>Results of {query}</h3>
      {data ? (
        <Grid container spacing={2} justifyContent="center">
          {renderMovies()}
        </Grid>
      ) : (
        'Nothing Found'
      )}
    </Container>
  );
}
