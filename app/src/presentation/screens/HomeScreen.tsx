import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatigButton from '../../components/buttons/fab/FloatingActionButton';
import FirstForm from '../../components/forms/formsCalculadora/FirstForm';
import CustomModal from '../../components/modal/CustomModal';
import PageTitle from '../../components/titles/PageTitle';
import { Fonts } from '../../constants/Fonts';


const HomeScreen = () => {
  const [openModal, seOpenModal] = useState<boolean>(false);


  return (
    <View style={styles.container}>
      
    <PageTitle title='Home'/>
    <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightnormal, {textAlign:'center'}]}>Crea una nueva calculadora</Text>
  <View style={styles.fabcontainer}>
  <FloatigButton onPress={() => seOpenModal(true)}/>
  </View>
  <CustomModal isOpen={openModal} setOpenModal={seOpenModal}>
        <FirstForm/>
      </CustomModal>
       {/* <View style={styles.container}>
      
    </View> */}
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:'8%',

    flex:1,
    justifyContent:'flex-start'
  },
  fabcontainer:{
    flex:0,
    width:'auto',
    position:'absolute',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    left: 0,
    right: 0,

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})