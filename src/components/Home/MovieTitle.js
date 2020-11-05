import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import MovieRating from './MovieRating';

const MovieTitle = (props) => {

  const { title, genres, vote_average, vote_count } = props

  console.log(props)

  if(!genres) return null;

  return (
    <View style={styles.ViewInfo}>
      <Title> {title} </Title>  
      <View style={styles.viewGenres}>
        { genres.map( ({ id, name}) => (
          <Paragraph style={{ color: '#8697a5'}} key={id}> { name } </Paragraph>
        )) }
      </View>
      <MovieRating vote_average={vote_average} vote_count={vote_count}/>

    </View>
  )
}

export default MovieTitle

const styles = StyleSheet.create({
  ViewInfo:{
    marginHorizontal: 20,
  },
  viewGenres: {
    flexDirection: 'row'
  }
})
