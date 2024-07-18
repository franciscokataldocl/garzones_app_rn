import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '../../constants/Fonts';

interface Props {
  errors?: string;
  touched?: boolean;
}

const Errorinput = ({ errors, touched }: Props) => {
  return (
    <>
      {errors && touched ? <Text style={[Fonts.fontcolorsecondary, Fonts.fontsm]}>{errors}</Text> : null}
    </>
  );
}

export default Errorinput;

const styles = StyleSheet.create({})