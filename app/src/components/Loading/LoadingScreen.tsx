import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator size="large" color="#181818" />
  </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });