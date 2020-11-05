import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useNowMovies = () => {
  const [ data, setData ] = useState([]);
  
  useEffect( () => {
    const getMovies = async () => {
      const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=1`;
      const getData = await fetch(url);
      const data = await getData.json();
      setData(data);
    }
    getMovies();
  }, [])
  return data;
}

export default useNowMovies;