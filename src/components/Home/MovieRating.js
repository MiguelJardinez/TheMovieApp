import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import usePreferences from '../../hooks/usePreferences'
import starDark from '../../assets/starDark.png';
import starLight from '../../assets/starLight.png';

const MovieRating = (props) => {

  const { vote_average, vote_count } = props;
  const media = vote_average / 2;
  const { theme } = usePreferences();

  if (!vote_average ) return null;

  return (
    <View style={styles.viewRating}>
      { !media ? null : <Rating
        type='custom'
        ratingImage={ theme === 'dark' ? starDark : starLight }
        ratingColor='#ffc205'
        ratingBackgroundColor= {  theme === 'dark' ? '#192734' : '#f0f0f0'}
        startingValue={media}
        imageSize={20}
        style={{marginLeft: -25}}
        />}
        <Paragraph style={{ fontSize: 16, marginLeft: 15 }}> {media} </Paragraph>
        <Paragraph style={{ fontSize: 12, color: '#8697a5' }}> {vote_count} Votos</Paragraph>
    </View>
  )
}

export default MovieRating

const styles = StyleSheet.create({
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
