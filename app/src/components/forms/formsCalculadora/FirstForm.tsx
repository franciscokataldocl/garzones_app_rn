import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';





const FirstForm = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

    // const { width } = Dimensions.get('window');
    // const [date, setDate] = useState(new Date());

    // const validationschema = Yup.object().shape({
    //     name: Yup.string().min(4, 'Nombre debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
    //     initialValue: Yup.string().required('Debes ingresar un monto'),
    //     initialValueName: Yup.string().min(4, 'Nombre valor inicial debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
    // });

    // const { handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting } = useFormik({
    //     initialValues: {
    //         name: '',
    //         initialValue: '',
    //         initialValueName: '',
    //         date: dayjs(date).format('DD-MM-YYYY')
    //     },
    //     validationSchema: validationschema,
    //     onSubmit: async (values) => {
    //         console.log(values);
    //     },
    // });

    return (
        <>
     
        
        </>
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        //     <KeyboardAvoidingView
        //         style={styles.container}
        //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //     >
        //         <View style={styles.inner}>
        //             <CustomInput
        //                 label='Nombre calculadora'
        //                 value={values.name}
        //                 onChangeText={text => setFieldValue('name', text)}
        //                 handleblur={handleBlur('name')}
        //                 placeholder={'Ej: Calculadora propinas'}
        //             />
        //             <Errorinput errors={errors.name} touched={touched.name} />
        //             <View style={styles.separator} />

        //             <CustomInput
        //                 label='Valor inicial'
        //                 value={values.initialValue}
        //                 onChangeText={text => setFieldValue('initialValue', text)}
        //                 handleblur={handleBlur('initialValue')}
        //                 placeholder={'Ej: 39000'}
        //             />
        //             <Errorinput errors={errors.initialValue} touched={touched.initialValue} />
        //             <View style={styles.separator} />

        //             <CustomInput
        //                 label='Nombre valor inicial'
        //                 value={values.initialValueName}
        //                 onChangeText={text => setFieldValue('initialValueName', text)}
        //                 handleblur={handleBlur('initialValueName')}
        //                 placeholder={'Ej: Total propinas'}
        //             />
        //             <Errorinput errors={errors.initialValueName} touched={touched.initialValueName} />
        //             <View style={styles.separator} />

        //             <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium,
        //             { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>Selecciona fecha del calculo</Text>
        //             <View style={styles.datepickerContainer}>
        //                 <DatePicker date={date} onDateChange={setDate} mode='date' locale='spa' maximumDate={new Date()} />
        //             </View>
        //             <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsregular,
        //             { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>El valor inicial corresponde al número desde el cual se comenzará a realizar el calculo <TextHighlight text='(ej: total propina)' /></Text>
        //         </View>

        //         <View style={[styles.buttonContainer]}>
        //             <ButtonBlack
        //                 title={'Crear'}
        //                 onPress={handleSubmit} />
        //         </View>
        //     </KeyboardAvoidingView>
        // </TouchableWithoutFeedback>
    );
}

export default FirstForm;

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
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

        width:'100%'
    }
});
