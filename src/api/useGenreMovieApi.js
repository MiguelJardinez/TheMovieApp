import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useGenreMovieApi = ( idGenre ) => {
  const [ genre, setGenre ] = useState([]);

  // console.log(idGenre); 
  
  useEffect( () => {
    const getGenre = async () => {
      const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setGenre(data);
      
    }
    getGenre();
  }, [])
  const arrayGenre = [];
  
  !idGenre ? null : idGenre.forEach( item =>{
    !genre.genres  ? null : genre.genres.forEach( ({ id, name}) => {
      if( item === id ){
        arrayGenre.push(name);
      }
    });
  });
  
  return arrayGenre;
}

export default useGenreMovieApi;