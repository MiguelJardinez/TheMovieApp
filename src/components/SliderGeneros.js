import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';
import { useGetGenreIdApi, useGenres } from '../api';
import { map } from 'loadsh';
import { CarouselMulti } from '../components'; 

const SliderGeneros = () => {

  const [ genreSelected, setGenreSelected ] = useState(28);

  const onChangeGenre = ( genreId ) => {
    setGenreSelected(genreId);
  } 

  const generos = useGenres();
  const genero = useGetGenreIdApi(genreSelected);

  return (
    <>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.genreList}
      >
        { generos && (
          map(generos, (item) => (
            <Text 
              style={[styles.genre, { color: item.id !== genreSelected ? '#8697a5' : 'white' }]} 
              onPress={ () => onChangeGenre( item.id ) }
              key={item.id}> {item.name}
            </Text>
          )) 
        )}
      </ScrollView>
      { genero && (<CarouselMulti data={genero} />)}
    </>
  )
}

export default SliderGeneros

const styles = StyleSheet.create({
  genreList: {
    marginTop: 5,
    marginBottom: 15,
    padding: 10,
    paddingHorizontal: 20,
  },
  genre: {
    marginRight: 20,
    fontSize: 16
  }
})
