import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import * as Yup from 'yup';
import { Colors } from '../../constants/Colors';
import CustomButton from '../buttons/CustomButton';
import CustomInput from '../inputs/CustomInput';
import Errorinput from '../inputs/Errorinput';



const SettingForm = () => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const getCurrentUser = async () => {
        const currentUser =  auth().currentUser;
        if (currentUser) {
          setUser(currentUser);
        }
      };

   useEffect(() => {
    getCurrentUser();
   }, [])
   
    const validationschema = Yup.object().shape({
        name: Yup.string().min(6, 'Nombre debe contener al menos 6 caracteres').required('Debes ingresar un nombre')
      });
    
      const {handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting } = useFormik({
        initialValues: {
          name: user?.displayName || '',
        },
        validationSchema:validationschema,
        enableReinitialize: true, 
        
        onSubmit: async (values) => {
            if (user) {
                try {
                  await user.updateProfile({ displayName: values.name });
                  Alert.alert('Nombre de usuario actualizado');
                } catch (error) {
                  console.error(error);
                  Alert.alert('Hubo un error al actualizar el nombre de usuario');
                }
              }
        },
      });

  return (
    <View>

      <CustomInput
          label='Nombre' 
          value={values.name} 
          onChangeText={text => setFieldValue('name', text)} 
          handleblur={handleBlur('name')}
          placeholder={user?.displayName || ''}
          marginBottom={20}
          />
          <Errorinput errors={errors.name} touched={touched.name} />
          <View 
         
          style={styles.buttonContainer}>
            {isSubmitting ? <ActivityIndicator size="large" color={Colors.primary} /> :
            <CustomButton
            title={'Actualizar nombre'}  
            onPress={handleSubmit}/>
            
            }
          
          </View>
    </View>
  )
}

export default SettingForm

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:'8%',
      backgroundColor:Colors.white,
      flex:1,
      justifyContent:'center'
    },
    buttonContainer:{
      width: '100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      marginTop:'8%'
    }
  })
  
  