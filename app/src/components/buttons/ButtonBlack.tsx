import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';


interface Props{
  title:string;
  onPress?:()=>void;
  icon?:string;
  direction?:'left'|'right';
  border?:boolean
}
const ButtonBlack = ({title, onPress, icon, direction, border}:Props) => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <Button
      icon={icon ? icon : ''}
      contentStyle={[styles.contentStyle, { 
        paddingVertical: 10, 
        paddingHorizontal:5, 
        alignSelf: 'flex-start', 
        
        flexDirection: direction === 'left' ? 'row' : 'row-reverse' }]}
      mode="elevated"
      style={[styles.button, {borderWidth:border ? 2 : 0,borderColor:'white',}]}
      labelStyle={{ fontSize: 25 }}
      onPress={onPress}
      buttonColor={Colors.primary}
      textColor={'white'}
      uppercase={true}
    >
      <Text style={[, styles.title, Fonts.fontsm,  Fonts.poppinsbold,{color:Colors.white}]}>{title}</Text>
    </Button>
    
    </KeyboardAvoidingView>

  )
}

export default ButtonBlack

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