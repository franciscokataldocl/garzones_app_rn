import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatigButton from '../../components/buttons/fab/FloatingActionButton';

import FirstForm from '../../components/forms/formsCalculadora/FirstForm';
import SecondForm from '../../components/forms/formsCalculadora/SecondForm';
import CustomModal from '../../components/modal/CustomModal';
import PageTitle from '../../components/titles/PageTitle';
import { Fonts } from '../../constants/Fonts';
import useFormStore from '../../store/forms/formStore';


const HomeScreen = () => {
  const [openModal, seOpenModal] = useState<boolean>(false);
  const form = useFormStore((state) => state.form);
  const fields = useFormStore((state) => state.fields);

useEffect(() => {
  seOpenModal(false)
  console.log('form',form)
  console.log('fields', fields)
}, [form, fields])



  return (
    <View style={styles.container}>
      
    <PageTitle title='Home'/>
    {form.form_name !== '' ? 
    <>
    <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightbold, {textAlign:'center'}]}>{form.form_name}</Text>
    <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightbold, {textAlign:'center'}]}>Fecha cálculo: {form.form_date}</Text>
    </> :
    <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightnormal, {textAlign:'center'}]}>Crea una nueva calculadora</Text>
    }
  <View style={styles.fabcontainer}>
  <FloatigButton onPress={() => seOpenModal(true)}/>
  </View>
  <CustomModal isOpen={openModal} setOpenModal={seOpenModal}>
    {form.form_name !== '' && form.form_date !== '' ? <SecondForm/> : <FirstForm/> }

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