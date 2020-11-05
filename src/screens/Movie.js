import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useGetMovieById } from '../api';
import { MovieImage, Video, MovieTrailer, MovieTitle } from '../components'

const Movie = () => {

  const [ showVideo, setShowVideo ] = useState(false);

  const data = useRoute();
  const { id } = data.params;
  const movie = useGetMovieById(id);

  console.log(data);

  const { poster_path, overview, release_date } = movie;
  
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MovieImage poster={ poster_path } />
        <MovieTrailer setShow={ setShowVideo } />
        <MovieTitle {...movie}/>
        <Paragraph style={styles.overview} > {overview} </Paragraph>
        <Paragraph style={styles.lanzamiento} > Fecha de lanzamiento: {release_date} </Paragraph>
      </ScrollView>
      <Video show={showVideo} setShow={ setShowVideo } idMovie={id}/>
    </>
  )
}

export default Movie

const styles = StyleSheet.create({
  overview: {
    marginHorizontal: 30,
    marginTop: 20,
    color: '#8796a5',
    marginBottom: 10,
    textAlign: 'justify'
  },
  lanzamiento: {
    marginHorizontal: 30,
    color: '#8796a5',
    marginBottom: 30,
  }
})
