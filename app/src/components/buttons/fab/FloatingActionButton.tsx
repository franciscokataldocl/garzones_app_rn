import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Colors } from '../../../constants/Colors';


interface Props {
  onPress?: () => void;
}
const FloatigButton = ({onPress}: Props) => {
  return (
    <FAB
    icon="plus"
    color={Colors.white}
    style={[styles.fab, {backgroundColor: Colors.primary}]}
    onPress={onPress}
  />
  )
}

export default FloatigButton

const styles = StyleSheet.create({
 
    fab: {
      borderRadius:100,
      margin: 12,
      fontWeight:900,
      position:'relative',
    },
  })