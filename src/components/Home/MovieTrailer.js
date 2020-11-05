import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const MovieTrailer = (props) => {
  
  const { setShow } = props;
  return (
    <View style={styles.viewPlay}>
      <IconButton 
        icon='play'
        color='#000'
        size={30}
        style={styles.play}
        onPress = { () => setShow(true) }
      />
    </View>
  )
}

export default MovieTrailer

const styles = StyleSheet.create({
  play:{
    backgroundColor: 'white',
    width: 50,
    height: 50,
    marginTop: -30,
    marginRight: 30,
    borderRadius: 120 
  },
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
})
