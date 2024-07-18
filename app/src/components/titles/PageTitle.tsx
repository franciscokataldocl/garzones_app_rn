import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../../constants/Fonts';

interface Props{
    username?:string | null | undefined;
    title?:string;
}

const PageTitle = ({username, title}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightbold]}>{title} <Text style={[Fonts.fontcolorsecondary]}>{username}</Text></Text>
    </View>
  )
}

export default PageTitle

const styles = StyleSheet.create({
   container:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    marginVertical:'15%'
    
   }
})