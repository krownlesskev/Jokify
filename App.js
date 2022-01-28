import React, { useEffect, useState, useRef } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { askForPermissions } from './src/services/NotificationRegistration';

const JokifyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#fff',
    background: '#1e1e1e',
    card: '#1DB954',
    text: '#fff'
  }
}



const App = () => {

  useEffect(() => {
    askForPermissions();
  }, [])

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle='light-content' />
      <NavigationContainer theme={JokifyTheme}>
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App