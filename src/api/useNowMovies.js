import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useNowMovies = ( page = 1) => {
  const [ data, setData ] = useState([]);
  const [ allMovies, setallMovies ] = useState([]);
  
  useEffect( () => {
    const getMovies = async () => {
      const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setData(data);
      setallMovies( allMovies.concat(data.results) );
    }
    getMovies();
  }, [page])

  console.log(allMovies)

  return {data, allMovies};
}

export default useNowMovies;