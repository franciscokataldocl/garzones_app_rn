

import { useFormik } from 'formik';
import React from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import * as Yup from 'yup';
import { Colors } from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import useFormStore from '../../../store/forms/formStore';
import ButtonBlack from '../../buttons/ButtonBlack';
import CustomInput from '../../inputs/CustomInput';
import Errorinput from '../../inputs/Errorinput';
import TextHighlight from '../../text/TextHighlight';





const SecondForm = () => {
    const { width } = Dimensions.get('window');
    const [action, setAction] = React.useState('');
    const [unity, setUnity] = React.useState('');


    const validationschema = Yup.object().shape({
        name: Yup.string().min(4, 'Nombre debe contener al menos 4 carácteres').required('Debes ingresar un nombre'),
        action: Yup.string().required('Debes seleccionar una acción'),
        unity: Yup.string().required('Debes seleccionar una unidad'),
        
        

    });

    const { handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting, } = useFormik({
        initialValues: {
            name: '',
            action: '',
            unity: '',

        },

        validationSchema: validationschema,

        onSubmit: async (values: any) => {
            console.log(values);
            useFormStore.getState().addField({ name: values.name, unity: values.unity, action: values.action });
        },
    });


    const handleDateSelectAction = (action:string) => {
        setAction(action);
        setFieldValue('action', action);
    };
    const handleDateSelectUnity = (unity:string) => {
        setUnity(unity);
        setFieldValue('unity', unity);
    };


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.inner}>
                    <Text style={[Fonts.fontcolorgrey, Fonts.fontmd, Fonts.fontweightnormal, Fonts.poppinsmedium, { textAlign: 'center', paddingBottom: '5%' }]}>Nuevo campo</Text>
                    <CustomInput
                        label='Nombre campo'
                        value={values.name}
                        onChangeText={text => setFieldValue('name', text)}
                        handleblur={handleBlur('name')}
                        placeholder={'Ej: Cocina'}
                    />
                    <Errorinput errors={errors.name as string} touched={!!touched.name} />

                    <View style={styles.separator} />



                    <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium]}>Acción del campo</Text>

                    <SegmentedButtons
                        value={action}
                        onValueChange={handleDateSelectAction}
                        buttons={[
                            {
                                value: 'SUMAR',
                                label: 'SUMAR',
                                checkedColor: action == 'SUMAR' ? Colors.white : Colors.primary,
                                style: { backgroundColor: action === 'SUMAR' ? Colors.primary : Colors.white }

                            },
                            {
                                value: 'RESTAR',
                                label: 'RESTAR',
                                checkedColor: action == 'RESTAR' ? Colors.white : Colors.primary,
                                style: { backgroundColor: action === 'RESTAR' ? Colors.primary : Colors.white }
                            },
                            {
                                value: 'MULTIPLICAR',
                                label: 'MULTIPLICAR',
                                checkedColor: action == 'MULTIPLICAR' ? Colors.white : Colors.primary,
                                style: { backgroundColor: action === 'MULTIPLICAR' ? Colors.primary : Colors.white }
                            },
                            {
                                value: 'DIVIDIR', label: 'DIVIDIR', checkedColor: action == 'DIVIDIR' ? Colors.white : Colors.primary,
                                style: { backgroundColor: action === 'DIVIDIR' ? Colors.primary : Colors.white }
                            },
                        ]}
                    />

                    <View style={styles.separator} />



                    {action !== '' && 
                   <>
                    <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsmedium]}>Unidad a {action}</Text>
                    <SegmentedButtons
                    value={unity}
                    onValueChange={handleDateSelectUnity}
                    buttons={[
                        {
                            value: 'UNIDADES',
                            label: 'UNIDADES',
                            checkedColor: unity == 'UNIDADES' ? Colors.white : Colors.primary,
                            style: { backgroundColor: unity === 'UNIDADES' ? Colors.primary : Colors.white }

                        },
                        {
                            value: 'PESOS',
                            label: 'PESOS',
                            checkedColor: unity == 'PESOS' ? Colors.white : Colors.primary,
                            style: { backgroundColor: unity === 'PESOS' ? Colors.primary : Colors.white }
                        },
                        {
                            value: 'PORCENTAJE', label: 'PORCENTAJE', checkedColor: unity == 'PORCENTAJE' ? Colors.white : Colors.primary,
                            style: { backgroundColor: unity === 'PORCENTAJE' ? Colors.primary : Colors.white }
                        },
                    ]}
                />
                   </>
                    
                    }


                   {values.name !== '' && values.action !== '' && values.unity !== '' &&  <Text style={[Fonts.fontcolorgrey, Fonts.fontsm, Fonts.fontweightnormal, Fonts.poppinsregular,
                    { marginTop: '5%', marginBottom: '5%', textAlign: 'center' }]}>
                        Estas agregando el campo <TextHighlight text={values.name} /> el cual <TextHighlight text={values.action}/> un <TextHighlight text={values.unity}/> al total de la propina 
                      
                        
                        </Text>}


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

export default SecondForm;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%'
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
        width: '100%',
        position: 'relative',
        bottom: '5%'

    }
});
