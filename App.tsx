import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Navigation } from './app/src/presentation/navigator/navigation/Navigation';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#181818',
    secondary: '#EB574E',
  },
};

const App = () => {
  return (

    <PaperProvider theme={theme}>
      <NavigationContainer>
      <Navigation/>
      </NavigationContainer>

    </PaperProvider>

  )
}

export default App

const styles = StyleSheet.create({})