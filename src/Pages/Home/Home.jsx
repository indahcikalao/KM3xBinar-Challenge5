import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Button } from '@mui/material';
import MovieCard from '../../Components/MovieCard/MovieCard';
import MovieCaro from '../../Components/MovieCaro/MovieCaro';
import './Home.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Home() {
  const BASE_ULR = 'https://api.themoviedb.org/3';
  const API_KEY = 'api_key=79749ec83b0a508fa2fb96fa8880ea24';
  const [movies, setMovies] = useState([]);
  const [caro, setCaro] = useState([]);
  const [numItems, setNumItems] = useState(6);
  const [clicked, setClicked] = useState(false);
  const slice = movies.slice(0, numItems);
  const caroSlice = caro.slice(0, 5);

  const fetchPopular = async () => {
    const res = await axios.get(`${BASE_ULR}/movie/popular?${API_KEY}`);
    console.log(res.data.results);
    setMovies(res.data.results);
  };

  const fetchTrending = async () => {
    const res = await axios.get(`${BASE_ULR}/trending/movie/day?${API_KEY}`);
    console.log(res.data.results);
    setCaro(res.data.results);
  };

  useEffect(() => {
    fetchPopular();
    fetchTrending();
  }, []);

  const renderMovies = () =>
    slice.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const renderCaroMovies = () =>
    caroSlice.map((movie) => (
      <SplideSlide key={movie.id}>
        <MovieCaro movie={movie} />
      </SplideSlide>
    ));

  return (
    <>
      {movies.length !== 0 && caro.length !== 0 && (
        <div>
          <section className="home1">
            <Splide
              options={{
                type: 'loop',
                arrows: true,
                keyboard: 'global',
                pagination: true,
                autoplay: true,
                height: '35rem',
              }}>
              {renderCaroMovies()}
            </Splide>
          </section>

          <Container>
            <section className="home2">
              <div className="top">
                <h3>Popular Movies</h3>
                {!clicked ? (
                  <Button
                    color="secondary"
                    variant="outlined"
                    style={{ minWidth: '100px' }}
                    onClick={() => {
                      setNumItems(movies.length);
                      setClicked(!clicked);
                    }}>
                    View All
                  </Button>
                ) : (
                  <Button
                    color="secondary"
                    style={{ minWidth: '100px' }}
                    variant="outlined"
                    onClick={() => {
                      setNumItems(6);
                      setClicked(!clicked);
                    }}>
                    close
                  </Button>
                )}
              </div>
              <Grid container spacing={2} justifyContent="center">
                {renderMovies()}
              </Grid>
            </section>
          </Container>
        </div>
      )}
    </>
  );
}
