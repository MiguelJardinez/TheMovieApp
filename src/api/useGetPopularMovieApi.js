import { result } from 'lodash';
import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useGetPopularMovieApi = ( page = 1 ) => {
  const [ popular, setPopular ] = useState([]);
  const [ allMovies, setAllMovies ] = useState([]);
  const [ listMovies, setListMovies ] = useState([]);
  
  useEffect( () => {
    const getMovies = async () => {
      const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setPopular(data);
      setAllMovies(allMovies.concat(data.results));
    }
    getMovies();

  }, [page])

  return {popular ,allMovies};
}

export default useGetPopularMovieApi;