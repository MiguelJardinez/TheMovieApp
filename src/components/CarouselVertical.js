import React from 'react'
import { StyleSheet, Image, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Paragraph, Title } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';
import { BASE_PATH_IMG } from '../utils/constants';
import { map, size } from 'lodash';

//Hooks
import { useGenreMovieApi } from '../api'

const CarouselVertical = (props) => {
  const { data } = props;

  const { width } = Dimensions.get('window');
  const ITEM_WIDTH = Math.round(width*.7);

  return (
    <View>
      <Carousel 
        layout='default'
        data={data.results}
        renderItem={ item => <RenderItem {...item}/>}
        sliderWidth={width}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  )
}

function RenderItem({ item }) {
  const { title, poster_path, genre_ids, id, overview } = item;
  const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;

  const generos = useGenreMovieApi(genre_ids);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('movies', { id })}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }}/>
        <Title style={styles.title}> {title} </Title>
        <View style={  styles.genres }>
          { generos && (
            map(generos, (genero, index) => (
              <Paragraph style={styles.genre} key={index}> 
                {genero}
                { index !== size(generos) -1 && ', '}
              </Paragraph>

            ))
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CarouselVertical

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10
  },
  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 12,
    color: "grey"
  }
})
