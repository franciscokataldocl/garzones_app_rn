import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Onboarding } from 'react-native-app-onboard';

import { useTheme } from 'react-native-paper';
import OnBoardPage from '../../components/onboardingTemplates/OnBoardPage';
import { RootStackParams } from '../navigator/navigation/Navigation';




{/* <AirplaneIcon/> */ }
const OnBoardScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  // navigation.navigate("UserName")

  const image1 = 'https://res.cloudinary.com/kataldo/image/upload/v1720829014/garzones_app/iv77zl72vol2ldvfamrc.jpg';
  const image2 = 'https://res.cloudinary.com/kataldo/image/upload/v1720829014/garzones_app/z2jf79xtobp8edbghtnw.jpg';
  const image3 = 'https://res.cloudinary.com/kataldo/image/upload/v1720829014/garzones_app/aukaxczvivjhua9ylsm3.jpg'

  return (
    <>
      <Onboarding
        showSkip={false}
        showDone={true}
        containerStyle={styles.container}
        useNativeDriver={true}
        paginationContainerStyle={{ backgroundColor: 'transparent' }}
        showPagination={false}>
        {[
          <OnBoardPage key="0" image={image1} title='La forma más rápida y precisa de calcular propinas'  />
          ,
          <OnBoardPage  key="1" image={image2} title='Transforma tu trabajo con nuestra app intuitiva'/>
          ,
          <OnBoardPage   key="2" image={image3} title='Di adiós a las cuentas complicadas y a los errores en papel' />
        ]}

      </Onboarding>

    </>

  )
}
// onDone={() => navigation.navigate("Login")}
export default OnBoardScreen

const styles = StyleSheet.create({

  doneLabel: {
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%'
  }
})