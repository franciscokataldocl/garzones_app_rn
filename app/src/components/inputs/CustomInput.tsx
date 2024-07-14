import React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputFocusEventData } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

interface Props{
    label:string;
    value: string;
    placeholder?:string;
    onChangeText: ((text: string) => void);
    handleblur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    secureTextEntry?:boolean;
    marginBottom?:number;
}
const CustomInput = ({label, value,placeholder, onChangeText, handleblur, secureTextEntry,marginBottom=5}:Props) => {
  return (
    <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onBlur={handleblur}
            secureTextEntry={secureTextEntry || false}
            mode="outlined"
            style={[styles.input, Fonts.fontsm, { marginBottom:marginBottom }]}
          />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        backgroundColor:Colors.white
    }
})