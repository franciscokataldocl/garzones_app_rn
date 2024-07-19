import auth from '@react-native-firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import * as Yup from 'yup';
import ButtonTransparent from '../../components/buttons/ButtonTransparent';
import CustomButton from '../../components/buttons/CustomButton';
import CustomInput from '../../components/inputs/CustomInput';
import Errorinput from '../../components/inputs/Errorinput';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { RootStackParams } from '../navigator/navigation/Navigation';



const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const validationschema = Yup.object().shape({
    username: Yup.string()
  .required('Debes ingresar un nombre') 
  .min(3, 'Password debe contener al menos 3 caracteres'),
    email: Yup.string().email('Debe ser un email válido').required('Debes ingresar un email'),
    password: Yup.string()
    .required('Debes ingresar un password') 
    .min(6, 'Password debe contener al menos 6 caracteres'),
    
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username:''
    },
    validationSchema:validationschema,
    
    onSubmit: async (values) => {
      try {
        const response = await auth().createUserWithEmailAndPassword(values.email, values.password);
        let user = response.user;
        const updatedUser = await user.updateProfile({
          displayName: values.username,
        });
        console.log(updatedUser)
      } catch (error) {
        Alert.alert('El correo ya está registrado');
        
      }
    },
  });

  return (
    <View style={[styles.container, {backgroundColor:Colors.white}]}>
      <Animatable.Text 
      animation="fadeInUp"
      duration={1500}
      delay={300} 
      
      style={[
        Fonts.fontxl,
        Fonts.fontweightbold,
        Fonts.fontcolorprimary,

        { textAlign: 'center', marginBottom:'20%' }]}>
        Integer eget laoreet lorem, placerat interdum ante
      </Animatable.Text>

      <View>
      <CustomInput
          label='Nombre' 
          value={values.username} 
          onChangeText={text => setFieldValue('username', text)} 
          handleblur={handleBlur('username')}
          placeholder="Ingresa tu nombre"
          marginBottom={20}
          />
          <Errorinput errors={errors.username} touched={touched.username} />
      <CustomInput
          label='Email' 
          value={values.email} 
          onChangeText={text => setFieldValue('email', text)} 
          handleblur={handleBlur('email')}
          placeholder="Ingresa tu email"
          marginBottom={20}
          />
          <Errorinput errors={errors.email} touched={touched.email} />
          <CustomInput 
          label='Password' 
          value={values.password} 
          handleblur={handleBlur('password')}
          onChangeText={text => setFieldValue('password', text)} 
          secureTextEntry
          
          />
          <Errorinput errors={errors.password} touched={touched.password} />

          <Animatable.View 
          animation="fadeInUp"
          duration={1500}
          delay={800}
          
          style={styles.buttonContainer}>
            {isSubmitting ? <ActivityIndicator size="large" color={Colors.primary} /> :
            <CustomButton
            title={'Crear cuenta'}  
            onPress={handleSubmit}/>
            
            }
            <ButtonTransparent 
            title={'Iniciar sesión'}
            color={'black'}
            onPress={()=> navigation.navigate('Login')}
            />
          
          </Animatable.View>
      </View>

    </View>
  )
}

export default RegisterScreen;
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:'8%',
    backgroundColor:'white',
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


  {/* <CustomInput 
          label='Email' 
          value={values.email} 
          onChangeText={text => setFieldValue('email', text)} 
          />
          <Errorinput errors={errors.email} touched={touched.email} />
           <CustomInput 
          label='Password' 
          value={values.password} 
          onChangeText={text => setFieldValue('password', text)} 
          />
          <Errorinput errors={errors.password} touched={touched.password} /> */}

