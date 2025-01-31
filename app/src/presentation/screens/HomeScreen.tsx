import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatigButton from '../../components/buttons/fab/FloatingActionButton';

import FormResults from '../../components/forms/formResults/FormResults';
import CustomModal from '../../components/modal/CustomModal';

SecondForm

import PageTitle from '../../components/titles/PageTitle';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

import FirstForm from '../../components/forms/formsCalculadora/FirstForm';
import SecondForm from '../../components/forms/formsCalculadora/SecondForm';
import ResultsCard from '../../components/results/ResultsCard';
import TextHighlight from '../../components/text/TextHighlight';
import useUser from '../../hooks/useUser';
import useFormStore from '../../store/forms/formStore';


const HomeScreen = () => {
const user = useUser();

    
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
  const form = useFormStore((state) => state.form);
  const fields = useFormStore((state) => state.fields);
  const results = useFormStore((state) => state.results);

  useEffect(() => {
    setOpenModalAdd(false)
  }, [form, fields])

useEffect(() => {
  // console.log('results.length_____',results)
  if(results.length > 0){
    setOpenModal(true)
  }
}, [results])





  return (
    <View style={styles.container}>
      <PageTitle title='Home' />
      {form.form_name !== '' ?
        <>
          <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightbold, { textAlign: 'center' }]}>{form.form_name}</Text>
          {/* <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightbold, { textAlign: 'center' }]}>Fecha cálculo: {form.form_date}</Text> */}
          {/* <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightbold, { textAlign: 'center' }]}>Turno: {form.form_shift}</Text> */}
          <View style={styles.separator} />
        </> :
        <Text style={[Fonts.fontcolorgreylight, Fonts.fontmd, Fonts.fontweightnormal, { textAlign: 'center' }]}>Hola <TextHighlight text={user?.displayName || ''}/> crea una nueva calculadora</Text>
      }


      <View style={styles.fabcontainer}>
        <FloatigButton onPress={() => setOpenModalAdd(true)} />
      </View>


      <CustomModal isOpen={openModalAdd} setOpenModal={setOpenModalAdd}>
      {form.form_name !== ''  ? <SecondForm /> : <FirstForm />}
      </CustomModal>
      <CustomModal isOpen={openModal} setOpenModal={setOpenModal}>
      <ResultsCard results={results}/>
      </CustomModal>



      {/* <CustomModal isOpen={openModal} setOpenModal={setOpenModal}>
  {results.length > 0 ? (
    <ResultsCard results={results}/>
  ) : (
    <>
      {form.form_name !== ''  ? <SecondForm /> : <FirstForm />}
    </>
  )}
</CustomModal> */}
      <FormResults fields={fields}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',
    backgroundColor:Colors.white,

    flex: 1,
    justifyContent: 'flex-start'
  },
  fabcontainer: {
    flex: 0,
    width: 'auto',
    position: 'absolute',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    left: 0,
    right: 0,

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    height: 15,
  },
})