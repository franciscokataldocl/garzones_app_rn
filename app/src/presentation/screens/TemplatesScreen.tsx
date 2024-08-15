import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../../constants/Fonts'

const TemplatesScreen = () => {
  return (
    <View>
      <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightbold, { textAlign: 'center', marginTop:'20%' }]}>Proximamente</Text>
    </View>
  )
}

export default TemplatesScreen

const styles = StyleSheet.create({})