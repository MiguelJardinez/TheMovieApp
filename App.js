import 'react-native-gesture-handler'
import React, { useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import { 
  NavigationContainer, 
  DarkTheme as DarkThemeNavigation, 
  DefaultTheme as DefaulthemeNavigation 
} from '@react-navigation/native';

import { 
  Provider as PapperProvider, 
  DarkTheme as DarkThemePaper, 
  DefaultTheme as DefaulthemePaper 
} from 'react-native-paper' 

//Componentes 
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

export default function App() {

  const [theme, setTheme] = useState('dark')

  DefaulthemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.primary = '#1ae1f2';
  DarkThemePaper.colors.accent = '#1ae1f2';

  DarkThemeNavigation.colors.background = '#192734';
  DarkThemeNavigation.colors.card = '#152122'

  const toggleTheme = () => {
    setTheme( theme === 'dark' ? 'light' : 'dark');
  }

  const preferences = useMemo(
    () => ({
      toggleTheme,
      theme
    }),
    [theme],
  )

  return (
    <PreferencesContext.Provider value={preferences}>
      <NavigationContainer theme={theme === 'dark' ? DarkThemeNavigation : DefaulthemeNavigation}>
        <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}/>
        <PapperProvider theme={theme === 'dark' ? DarkThemePaper : DefaulthemePaper}>
          <Navigation />
        </PapperProvider>
      </NavigationContainer>
    </PreferencesContext.Provider>
  );
}
