import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { BsGoogle } from 'react-icons/bs';
import { Button } from '@mui/material';

export default function GoogleLogin({ setToken }) {
  const googleLog = useGoogleLogin({
    onSuccess: async (response) => {
      const data = {
        access_token: response.access_token,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`,
          data
        );
        if (result.data.token) {
          localStorage.setItem('token', result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={googleLog}>
      <BsGoogle style={{ marginRight: '10px' }} />
      Google
    </Button>
  );
}
