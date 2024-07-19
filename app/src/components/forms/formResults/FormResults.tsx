import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { View } from 'react-native-animatable';
import { Colors } from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import useTransformData from '../../../hooks/useTransformData';

import { Field } from '../../../interfaces/form.interfaces';
import useFormStore, { FormState } from '../../../store/forms/formStore';
import CustomButton from '../../buttons/CustomButton';
import CustomInput from '../../inputs/CustomInput';
import Errorinput from '../../inputs/Errorinput';

interface Props {
  fields: Field[];
}

interface FormFields {
  name: string;
  value: number;
}

interface InitialValues {
  [key: string]: number;
}

const FormResults = ({ fields }: Props) => {
  const [initialValues, setInitialValues] = useState<InitialValues>({});
  const addResultsData = useFormStore((state: FormState) => state.addResultsData);


  useEffect(() => {
    const values: InitialValues = fields.reduce((acc, field) => {
      const key = field.name.replace(/\s+/g, '_').toLowerCase();
      acc[key] = 0;
      return acc;
    }, {} as InitialValues);

    setInitialValues(values);
  }, [fields]);

  const actionSymbols: { [key: string]: string } = {
    SUMAR: '+',
    RESTAR: '-',
    MULTIPLICAR: '*',
    DIVIDIR: '/',
  };

  const unitySymbols: { [key: string]: string } = {
    PESOS: '$',
    UNIDADES: 'U',
    PORCENTAJE: '%',
  };

  const {
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: validationschema,

    onSubmit: (values: any) => {
      const finalValues = fields
        .map((field) => {
          const key = field.name.replace(/\s+/g, '_').toLowerCase();
          return {
            name: field.name,
            value: values[key]?.toString() || '0', // Convert number to string and provide default value
            action: field.action,
            unity: field.unity,
            position: field.position,
          };
        })
        .sort((a, b) => a.position - b.position);

      // Call the hook with the final values
      const results = useTransformData(finalValues);
      addResultsData(results);

      // You can also update state or perform other actions with the results here
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {fields &&
          fields.map((field, index) => (
            <View key={index} style={styles.inputContainer}>
              <CustomInput
                key={index}
                label={field.name}
                value={values[field.name.replace(/\s+/g, '_').toLowerCase()]?.toString()} // Convert value to string
                keyboardType="numeric"
                onChangeText={(text) =>
                  setFieldValue(
                    field.name.replace(/\s+/g, '_').toLowerCase(),
                    text
                  )
                }
                handleblur={handleBlur(
                  field.name.replace(/\s+/g, '_').toLowerCase()
                )}
              />
              <Text
                style={[
                  styles.iconText,
                  Fonts.fontcolorsecondary,
                  Fonts.fontmd,
                  Fonts.fontweightbold,
                  Fonts.poppinsbold,
                ]}>
                {actionSymbols[field.action]}
                {unitySymbols[field.unity]}
              </Text>
              <Errorinput
                errors={errors[field.name] as string}
                touched={!!touched[field.name]}
              />
              <View style={styles.separator} />
            </View>
          ))}
        {fields.length > 3 && (
          <CustomButton
            title={'Calcular'}
            onPress={handleSubmit}
            color={Colors.secondary}
          />
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default FormResults;

const styles = StyleSheet.create({
  container: {},
  separator: {
    height: 15,
  },
  inputContainer: {},
  iconText: {
    position: 'absolute',
    top: '20%',
    right: '5%',
  },
});
