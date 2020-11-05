import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useGenres = () => {
  const [ generos, setGeneros ] = useState([]);
  
  useEffect( () => {
    const getGenre = async () => {
      const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setGeneros(data);
      
    }
    getGenre();
  }, [])
  
  return generos.genres;
}

export default useGenres;