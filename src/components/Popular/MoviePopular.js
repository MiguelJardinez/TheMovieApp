import React from 'react'
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { BASE_PATH_IMG } from '../../utils/constants';
import { MovieRating } from '..';
import { useNavigation } from '@react-navigation/native';


const MoviePopular = (props) => {
  
  const { poster_path, title, release_date, vote_count, vote_average, id } = props.item;
  const navigation = useNavigation();
  
  function imagenDefault() {
    if( poster_path ) {
      const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;
      return {uri: imageUrl}
    } else {
      return require('../../assets/default-imgage.png')
    }
  }
  return (
    <TouchableWithoutFeedback onPress={ () => navigation.navigate('movies', { id })} >
      <View style={ styles.movieView }>
        <View style={ styles.left }>
          <Image 
            style={ styles.image } 
            source={ imagenDefault() } 
          />
        </View>
        <View>
          <Title style={{ width: '80%' }}> {title} </Title>
          <Paragraph> {release_date} </Paragraph>
          <MovieRating vote_count={vote_count}  vote_average={vote_average}/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MoviePopular

const styles = StyleSheet.create({
  movieView: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  left: {
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 150
  }
})
