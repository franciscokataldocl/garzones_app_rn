import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useOnboarding } from 'react-native-app-onboard';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { RootStackParams } from '../../presentation/navigator/navigation/Navigation';
import CustomButton from '../buttons/CustomButton';


interface Props{
    image:string;

}
const OnBoardPage = ({image}:Props) => {
    const { width } = Dimensions.get('window');
    const { nextPage, isDone} = useOnboarding();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    
    const handleButtonPress = () => {
      if (isDone) {
        navigation.navigate('Login'); 
      } else {
        nextPage();
      }
    };
  return (
    <View style={[styles.container, {width: width}]}>
    <ImageBackground
        source={{uri: image}}
        style={styles.backgroundImage}>
        <Animatable.Text 
        animation="fadeIn"
        duration={1000}
        delay={1000}
        style={[
          Fonts.fontxl, 
          Fonts.fontweightbold, 
          Fonts.poppinsbold, 
          {color: Colors.white, 
            paddingHorizontal: '5%',
            paddingBottom: '20%'
            }]}>
        Este es un texto con fuente grande y negrita
      </Animatable.Text>
       <Animatable.View 
       animation="fadeInRight"
       duration={1000}
       delay={3000}
       style={[styles.buttonContainer, {justifyContent:'flex-end'}]}>


       <CustomButton 
       title={isDone ? 'Finalizar' : 'Siguiente'}  
       icon='arrow-right'
       direction='right' 
       border
       onPress={handleButtonPress}/>
       
       </Animatable.View>

    </ImageBackground>
</View>
  )
}

export default OnBoardPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    backgroundImage:{
        flex : 1,
        width : '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    buttonContainer:{
      flex:0,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: '5%',
      paddingVertical: '5%',
    }
  });