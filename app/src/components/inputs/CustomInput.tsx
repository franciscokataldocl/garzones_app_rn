import React from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, Text, TextInputFocusEventData, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

interface Props{
    label:string;
    value: string;
    placeholder?:string;
    onChangeText: ((text: string) => void);
    handleblur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    secureTextEntry?:boolean;
    marginBottom?:number;
    keyboardType?: KeyboardTypeOptions;
}
const CustomInput = ({label, value,placeholder, onChangeText, handleblur, secureTextEntry,keyboardType='default' , marginBottom=5}:Props) => {
  return (
    <View
    >
 <TextInput
    
            label={<Text style={{fontSize: 14, backgroundColor:Colors.white, paddingHorizontal:30}}>{label}</Text>}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onBlur={handleblur}
            secureTextEntry={secureTextEntry || false}
            keyboardType={keyboardType || 'number'}
            mode="outlined"
            style={[styles.input, Fonts.fontsm, { marginBottom:marginBottom }]}
          />
    </View>
   
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input:{
        backgroundColor:Colors.white
    }
})