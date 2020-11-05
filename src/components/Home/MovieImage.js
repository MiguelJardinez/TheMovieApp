import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native';
import { BASE_PATH_IMG } from '../../utils/constants';


const MovieImage = (props) => {  

  const { poster } = props;

  if( !poster) return null;

  return (
    <View style={styles.viewPoster}>
        <Image style={styles.poster} source={{uri: `${BASE_PATH_IMG}/w500${poster}`}} />
    </View>
  )
}

export default MovieImage

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  }, 
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  }
})
