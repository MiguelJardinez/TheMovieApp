import React, {useState} from 'react'
import { StyleSheet, ScrollView, View, Dimensions, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useGetPopularMovieApi  } from '../api';
import { MoviePopular } from '../components';
import usePreferences from '../hooks/usePreferences'

const Popula = () => {
  const [ page, setPage ] = useState(1)
  const { theme } =usePreferences();
  const { popular, allMovies } = useGetPopularMovieApi(page);
  
  return (
    <FlatList 
      data={ allMovies }
      renderItem={ (movie) => <MoviePopular {...movie}/> }
      keyExtractor={(movie, index) => index}
      onEndReached={() => setPage(page +1)}
    />
  )
}

export default Popula

const styles = StyleSheet.create({
  loadMoreContainer: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  loadMore: {
    backgroundColor: 'transparent',
  }
})
