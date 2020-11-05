import React, { useState } from 'react'
import { StyleSheet, FlatList, SafeAreaView, Platform } from 'react-native';
import { TextInput, Searchbar } from 'react-native-paper'; 
import { useSearchMovieApi } from '../api'
import { MoviePopular } from '../components';

const Search = () => {
  const [ busqueda, setBusqueda ] = useState('');

  const search = useSearchMovieApi(busqueda);

  return (
    <SafeAreaView>
      {/* <TextInput 
        label='Pelicula'
        placeholder='Buscar Pelicula'
        value={search}
        style={{ marginVertical: 20}}
      /> */}
      <Searchbar 
        placeholder='Busca tu pelicula'
        iconColor={ Platform.OS === 'ios' && 'transparent' }
        icon='arrow-left'
        style={styles.input}
        onChangeText={ (e) => setBusqueda(e) }
      />
      <FlatList 
        data={ search }
        renderItem={ (movie) => <MoviePopular {...movie}/> }
        keyExtractor={(movie, index) => index}
      />
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  input:{
    marginTop: -3,
    backgroundColor: '#15212b'
  }
})
