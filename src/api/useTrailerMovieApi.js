import React, { useState, useEffect } from 'react';
import { API_HOST, API_KEY, LANG } from '../utils/constants';

const useTrailerMovieApi = ( idMovie ) => {
  const [ videoList, setVideoList ] = useState([]);
  const [video, setVideo] = useState(null)
  
  
  const videoUrl = `https://www.youtube.com/embed/${video}?ccontrols=0&showinfo=0`;

  useEffect( () => {
    const getGenre = async () => {
      const url = `${API_HOST}/movie/${idMovie}/videos?api_key=${API_KEY}&language=${LANG}`;
      const getData = await fetch(url);
      const data = await getData.json();
      setVideoList(data.results);
    }
    getGenre();
    
  }, [idMovie])
  
  // setVideo(trailer);
  !videoList ? null : 
    videoList.forEach( ({key}) => {
      if ( video === null && !video ) {
        setVideo(key);
      }
    });
  
  return videoUrl;
}

export default useTrailerMovieApi;