import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { Colors } from '../../constants/Colors';

interface Props{
    size:number;
    source:string;
    title:string;
    focused:boolean;
}
const BottomTabLabel = ({size, source, title, focused}:Props) => {
  return (
    <View style={styles.labelContainer}>
            <Icon source={source} size={size} color={focused?Colors.secondary:Colors.greyLight}/>
            <Text style={{color: focused?Colors.secondary:Colors.greyLight}}>{title}</Text>
          </View>
  )
}

export default BottomTabLabel

const styles = StyleSheet.create({
    labelContainer:{
        justifyContent:'center',
        alignItems:'center',
    }
})