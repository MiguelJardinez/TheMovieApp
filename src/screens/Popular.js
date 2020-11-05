import React, {useState} from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { useGetPopularMovieApi  } from '../api';
import { MoviePopular } from '../components';

const Popula = () => {
  const [ page, setPage ] = useState(3)
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
