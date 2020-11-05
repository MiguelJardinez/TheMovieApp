import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useSearchMovieApi = ( search ) => {
  const [ searchMovie, setSearchMovie ] = useState([]);
  
  useEffect( () => {
    const getMovies = async () => {
      const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setSearchMovie(data.results);
    }
    getMovies();
  }, [search])


  return searchMovie;
}

export default useSearchMovieApi;