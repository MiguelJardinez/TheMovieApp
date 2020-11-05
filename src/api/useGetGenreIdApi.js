import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useGetGenreIdApi = ( idGenre ) => {
  const [ genre, setGenre ] = useState([]);

  // console.log(idGenre); 
  
  useEffect( () => {
    const getGenre = async () => {
      const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${ idGenre }&language=${LANG}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setGenre(data);
      
    }
    getGenre();
  }, [idGenre])
  
  return genre;
}

export default useGetGenreIdApi;