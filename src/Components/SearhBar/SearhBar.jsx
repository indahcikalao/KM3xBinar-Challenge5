import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import '../Header/Header.scss';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <TextField
        id="outlined"
        input="submit"
        hidden
        size="small"
        sx={{ minWidth: '350px' }}
        placeholder="Search a Movie"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <BsSearch
                title="search"
                className="icon"
                onClick={(e) => {
                  e.preventDefault();
                  query && navigate(`/search-result?keywords=${query}`);
                }}
              />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </>
  );
}
