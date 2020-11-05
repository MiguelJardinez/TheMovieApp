import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'; 
import { Title } from 'react-native-paper'; 
import Carousel from 'react-native-snap-carousel';
import { BASE_PATH_IMG } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = Math.round( width * 0.3 );

const CarouselMulti = (props) => {

  const { data } = props;
  
  return (
    <Carousel 
      layout='default'
      data={data.results}
      renderItem={ (item) => <RenderItem {...item} />}
      sliderWidth = {width}
      itemWidth={ ITEM_WIDTH }
      firstItem={1}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
    />
    )
}

function RenderItem (props) {

  const { item } = props;
  const { id, title, poster_path } = props.item;

  const imageUrl = `${BASE_PATH_IMG}/w500/${poster_path}`;


  const navigation = useNavigation();
  
  return (
    <TouchableWithoutFeedback onPress={ () => navigation.navigate('movies', { id })}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Title style={styles.title} numberOfLines={1}> {title} </Title>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CarouselMulti

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 10
  },
  image: {
    width: '85%',
    height: 170,
    borderRadius: 10
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16
  }
});
