import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '../../constants/Fonts';

interface Props{
  text:string;
}


const TextHighlight = ({text}:Props) => {
  return (
    <Text style={[Fonts.fontcolorsecondary]}>{text}</Text>
  )
}

export default TextHighlight

const styles = StyleSheet.create({})