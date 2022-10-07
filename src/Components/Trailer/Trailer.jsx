import React, { useState } from 'react';
import axios from 'axios';
import { Button, Box, Modal } from '@mui/material';
import { BsPlayCircle } from 'react-icons/bs';

export default function Trailer({ movie }) {
  const BASE_ULR = 'https://api.themoviedb.org/3';
  const API_KEY = 'api_key=79749ec83b0a508fa2fb96fa8880ea24';
  const [videos, setVideos] = useState(null);
  const trailer = videos?.filter(
    (a) => a.type === 'Trailer' && a.site === 'YouTube'
  )[0].key;
  console.log(trailer);

  function fetchVideos() {
    axios.get(`${BASE_ULR}/movie/${movie.id}/videos?${API_KEY}`).then((res) => {
      console.log(res.data.results);
      setVideos(res.data.results);
    });
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<BsPlayCircle />}
        style={{ minWidth: '100px' }}
        onClick={() => {
          setOpen(true);
          fetchVideos();
        }}>
        Watch Trailer
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <h4 style={{ marginTop: '0', textAlign: 'center' }}>
            Trailer of {movie.title}
          </h4>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            title={'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Box>
      </Modal>
    </div>
  );
}
