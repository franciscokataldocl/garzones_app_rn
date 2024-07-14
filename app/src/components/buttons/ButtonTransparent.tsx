import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';


interface Props{
  title:string;
  onPress?:()=>void;
  icon?:string;
  direction?:'left'|'right';
  color:'white'|'black';
  border?:boolean
}
const ButtonTransparent = ({title, onPress, icon, direction, border, color}:Props) => {
  return (
    <>
   <Button
      icon={icon ? icon : ''}
      contentStyle={[
        styles.contentStyle,
        {
          paddingVertical: 10,
          paddingHorizontal: 5,
          alignSelf: 'center',
          flexDirection: direction === 'left' ? 'row' : 'row-reverse',
        },
      ]}
      mode="contained"
      style={[
        styles.button,
        {
          borderWidth: border ? 2 : 0,
          borderColor: color === 'white' ? 'white' : Colors.primary,
        },
      ]}
      labelStyle={[Fonts.fontsm,  Fonts.poppinsbold]}
      onPress={onPress}
      buttonColor={'transparent'}
      textColor={color === 'white' ? 'white' : Colors.primary}
      uppercase={true}
    >
      <Text style={[styles.title, { color: color === 'white' ? 'white' : Colors.primary }]}>{title}</Text>
    </Button>
    
    </>

  )
}

export default ButtonTransparent

const styles = StyleSheet.create({
  button: {
    borderRadius: 50, 
    alignSelf: 'center'
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    letterSpacing:1.2
  },
});