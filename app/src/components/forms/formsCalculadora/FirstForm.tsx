

import dayjs from 'dayjs';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import { Fonts } from '../../../constants/Fonts';
import useFormStore from '../../../store/forms/formStore';
import CustomButton from '../../buttons/CustomButton';
import CustomInput from '../../inputs/CustomInput';
import Errorinput from '../../inputs/Errorinput';








const FirstForm = () => {
    const [date, setDate] = useState(new Date());
    const [shift, setShift] = useState('');

    const validationschema = Yup.object().shape({
        name: Yup.string().min(4, 'Nombre debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
        initialValueName: Yup.string().min(4, 'Nombre valor inicial debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
        // date: Yup.string().required('Debes seleccionar una fecha'),
    });

    const { handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting,  } = useFormik({
        initialValues: {
            name: '',
            initialValueName: '',
            date: dayjs(date).format('DD-MM-YYYY'),
            shitf:''

        },

        validationSchema: validationschema,
        
        onSubmit: async (values:any) => {
            useFormStore.getState().addFormData({ 
                form_name: values.name, 
                // form_date: values.date, 
                form_date: '', 
                form_shift: values.shift,
                });
                useFormStore.getState().addField({ name: values.initialValueName, unity: '', action: '' });
        },
    });

//     const handleDateChange = (newDate: Date) => {
//       setDate(newDate);
//       setFieldValue('date', dayjs(newDate).format('DD-MM-YYYY'));
//   };
//   const handleShiftSelect = (shift:string) => {
//     setShift(shift);
//     setFieldValue('shift', shift);
// };


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

                    {/* <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium,
                    { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>Selecciona fecha del calculo</Text>
                    <View style={styles.datepickerContainer}>
                        <DatePicker date={date} onDateChange={handleDateChange} mode='date' locale='spa' maximumDate={new Date()} />
                    </View> */}
        
                    {/* <View>
                    <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium,
                    { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>Seleccione turno</Text>
                    <SegmentedButtons
                    value={shift}
                    onValueChange={handleShiftSelect}
                    buttons={[
                        {
                            value: 'AM',
                            label: 'AM',
                            checkedColor: shift == 'AM' ? Colors.white : Colors.primary,
                            style: { backgroundColor: shift === 'AM' ? Colors.primary : Colors.white }

                        },
                        {
                            value: 'PM',
                            label: 'PM',
                            checkedColor: shift == 'PM' ? Colors.white : Colors.primary,
                            style: { backgroundColor: shift === 'PM' ? Colors.primary : Colors.white }
                        },
                       
                    ]}
                />
                    </View> */}

                    
                 <View style={[styles.buttonContainer]}>
                    <CustomButton
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
