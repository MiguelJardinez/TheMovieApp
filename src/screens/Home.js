import React, { useState }  from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Title } from 'react-native-paper';
import { useNowMovies, useGenres, useGetGenreIdApi } from '../api/index';
import { map } from 'loadsh';
import { SliderGeneros } from '../components'

import CarouselVertical from '../components/CarouselVertical';

const Home = () => {
  
  const data = useNowMovies();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      { data && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>Nuevas Películas</Title>
          <CarouselVertical data={data} />
        </View>
      )}
      <View style={styles.genres}>
        <Title style={styles.genreTitle}>Peliculas por genero</Title>
        <SliderGeneros />

      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 22
  },
  genres: {
    marginTop: 20,
    marginBottom: 50,
  },
  genreTitle: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22
  }
})
