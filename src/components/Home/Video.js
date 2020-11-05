import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Modal, IconButton, Title } from 'react-native-paper';
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';
import { useTrailerMovieApi } from '../../api';

const Video = (props) => {

  const { show, setShow, idMovie } = props;
  const trailers = useTrailerMovieApi( idMovie );

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      { !trailers ? null : 
        <WebView style={{ width: 500 }} source={{ uri: trailers }}/>
      }
      <IconButton icon='close' onPress={ () => setShow(false) } style={styles.close}/>
    </Modal>
  )
}

export default Video

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    height: '120%',
    alignItems: 'center'
  },
  close: {
    backgroundColor: '#1ea1f2',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    bottom: 100 
  },
  video: {
    alignSelf: 'stretch',
    height: 300
  }
})
