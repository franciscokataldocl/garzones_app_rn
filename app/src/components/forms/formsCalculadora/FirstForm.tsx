

import dayjs from 'dayjs';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as Yup from 'yup';
import { Fonts } from '../../../constants/Fonts';
import useFormStore from '../../../store/forms/formStore';
import ButtonBlack from '../../buttons/ButtonBlack';
import CustomInput from '../../inputs/CustomInput';
import Errorinput from '../../inputs/Errorinput';
import TextHighlight from '../../text/TextHighlight';


const form_1 = {
  date: "14-07-2024", 
  initialValue: 40000, 
  initialValueName: "total propinas", 
  name: "calculadora propinas"
}





const FirstForm = () => {
    const [date, setDate] = useState(new Date());

    const validationschema = Yup.object().shape({
        name: Yup.string().min(4, 'Nombre debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
        initialValueName: Yup.string().min(4, 'Nombre valor inicial debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
        date: Yup.string().required('Debes seleccionar una fecha'),
    });

    const { handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting,  } = useFormik({
        initialValues: {
            name: '',
            initialValueName: '',
            date: dayjs(date).format('DD-MM-YYYY')
        },

        validationSchema: validationschema,
        
        onSubmit: async (values:any) => {
            console.log(values);
            useFormStore.getState().addFormData({ 
                form_name: values.name, 
                form_date: values.date, 
                });
                useFormStore.getState().addField({ name: values.initialValueName, unity: '', action: '' });
        },
    });

    const handleDateChange = (newDate: Date) => {
      setDate(newDate);
      setFieldValue('date', dayjs(newDate).format('DD-MM-YYYY'));
  };

    return (
    
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.inner}>
                  <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightnormal, Fonts.poppinsmedium, {textAlign:'center', paddingBottom:'5%'}]}>Nueva calculadora</Text>
                    <CustomInput
                        label='Nombre calculadora'
                        value={values.name}
                        onChangeText={text => setFieldValue('name', text)}
                        handleblur={handleBlur('name')}
                        placeholder={'Ej: Calculadora propinas'}
                    />
                    <Errorinput errors={errors.name as string} touched={!!touched.name} />

                    <View style={styles.separator} />

                   

                    <CustomInput
                        label='Nombre valor inicial'
                        value={values.initialValueName}
                        onChangeText={text => setFieldValue('initialValueName', text)}
                        handleblur={handleBlur('initialValueName')}
                        placeholder={'Ej: Total propinas'}
                    />
                              <Errorinput errors={errors.initialValueName as string} touched={!!touched.initialValueName} />

                    <View style={styles.separator} />

                    <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium,
                    { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>Selecciona fecha del calculo</Text>
                    <View style={styles.datepickerContainer}>
                        <DatePicker date={date} onDateChange={handleDateChange} mode='date' locale='spa' maximumDate={new Date()} />
                    </View>
                    <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsregular,
                    { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>El valor inicial corresponde al número desde el cual se comenzará a realizar el calculo <TextHighlight text='(ej: total propina)' /></Text>
                 <View style={[styles.buttonContainer]}>
                    <ButtonBlack
                        title={'Crear'}
                        onPress={handleSubmit} />
                </View>
                </View>

               
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default FirstForm;

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        width:'100%'
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
    inner: {
        flex: 1,
        paddingHorizontal: '8%',
    },
    datepickerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 20,
    },
    buttonContainer: {
        paddingVertical: '20%',
        width:'100%',
        position:'relative',
        bottom:'5%'

    }
});
