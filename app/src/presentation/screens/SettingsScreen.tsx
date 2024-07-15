import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SettingsScreenProps = {
  route: RouteProp<TabStackParams, 'Settings'>; // Asegúrate de ajustar esto según la definición de tus rutas
};
type TabStackParams = {
  Settings: { user: FirebaseAuthTypes.User | null };
  // Otras pantallas dentro de TabStack
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ route }) => {
  const { user } = route.params; // Accede al parámetro user enviado desde la navegación

  return (
    <View>
      <Text>{user?.displayName}</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})