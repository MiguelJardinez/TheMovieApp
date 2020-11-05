import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useGetMovieById = ( idMovie ) => {
  const [ movie, setMovie ] = useState([]);

  // console.log(idGenre); 
  
  useEffect( () => {
    const getGenre = async () => {
      const url = `${API_HOST}/movie/${idMovie}?api_key=${API_KEY}&language=${LANG}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setMovie(data);
      
    }
    getGenre();
  }, [idMovie])
  
  return movie;
}

export default useGetMovieById;