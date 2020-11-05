import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import { useNowMovies } from '../api';
import { MoviePopular } from '../components';


const News = () => {
  const [page, setPage] = useState(2)

  const { data ,allMovies } = useNowMovies(page);

  return (
    <FlatList 
      data={ allMovies }
      renderItem={ (movie) => <MoviePopular {...movie}/> }
      keyExtractor={(movie, index) => index}
      onEndReached={() => setPage(page +1)}
    />
  )
}

export default News

const styles = StyleSheet.create({})
