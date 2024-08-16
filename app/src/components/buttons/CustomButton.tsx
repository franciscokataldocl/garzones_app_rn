import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';


interface Props{
  title:string;
  onPress?:()=>void;
  icon?:string;
  color?:string;
  direction?:'left'|'right';
  border?:boolean
}
const CustomButton = ({title, onPress, icon, direction, border, color}:Props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <Button
      icon={icon ? icon : ''}
      contentStyle={[styles.contentStyle, { 
        paddingVertical: 2, 
        paddingHorizontal:2, 
        alignSelf: 'flex-start', 
        
        flexDirection: direction === 'left' ? 'row' : 'row-reverse' }]}
      mode="elevated"
      style={[styles.button, {borderWidth:border ? 2 : 0,borderColor:'white',}]}
      labelStyle={{ fontSize: 16}}
      onPress={onPress}
      buttonColor={color ? color : Colors.primary}
      textColor={'white'}
      uppercase={true}
    >
      <Text style={[, styles.title, Fonts.fontsm,  Fonts.poppinsbold,{color:Colors.white}]}>{title}</Text>
    </Button>
    
    </KeyboardAvoidingView>

  )
}

export default CustomButton

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