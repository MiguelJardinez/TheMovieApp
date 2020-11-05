import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movie, News, Popular, Search } from '../screens/index';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();

const StackNavigaton = ({ navigation }) => {
  const {openDrawer} = navigation;

  const buttonLeft = (screen) => {
    switch (screen) {

      case 'search':
      case 'movie':
        return <IconButton icon="arrow-left" onPress={ () => navigation.goBack()}/>
      
      default:
        return <IconButton icon="menu" onPress={ () => openDrawer()}/>
    }
  }

  const buttonRight = () => {
    return <IconButton icon='magnify' onPress={ () => navigation.navigate('search')}/>
  }
    
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="home" 
        component={Home} 
        options={{
          title: "TheMovieApp",
          headerLeft: () => buttonLeft('home'),
          headerRight: () => buttonRight(),
        }}
      />

      <Stack.Screen 
        name="movies" 
        component={Movie} 
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => buttonLeft('movies'),
          headerRight: () => buttonRight(),
        }}
      />

      <Stack.Screen 
        name="news" 
        component={News} 
        options={{
          title: "Nuevas Peliculas",
          headerLeft: () => buttonLeft('news'),
          headerRight: () => buttonRight(),
        }}
      />

      <Stack.Screen 
        name="popular" 
        component={Popular} 
        options={{
          title: "Peliculas populares",
          headerLeft: () => buttonLeft('popular'),
          headerRight: () => buttonRight(),
        }}
      />

      <Stack.Screen 
        name="search" 
        component={Search} 
        options={{
          title: "",
          headerLeft: () => buttonLeft('search'),
        }}
      />

    </Stack.Navigator>
  )
}

export default StackNavigaton;