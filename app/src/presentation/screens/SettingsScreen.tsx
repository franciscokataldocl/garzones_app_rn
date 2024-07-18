import auth from '@react-native-firebase/auth';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import ButtonTransparent from '../../components/buttons/ButtonTransparent';
import SettingForm from '../../components/forms/SettingForm';
import PageTitle from '../../components/titles/PageTitle';
import { Colors } from '../../constants/Colors';
import { RootStackParams } from '../navigator/navigation/Navigation';

type SettingsScreenProps = {
    route: RouteProp<TabStackParams, 'Settings'>;
};

type TabStackParams = {
    Settings: { user: { uid: string; email: string | null; displayName: string | null; photoURL: string | null } | null };
    // Other screens in TabStack
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ route }) => {
    const { user } = route.params;

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

const logOut = async () => {
  try {
    await auth().signOut();
    Alert.alert('Sesión cerrada', 'Has cerrado sesión exitosamente.');// Navegar a la pantalla de inicio de sesión después de cerrar sesión
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Hubo un error al cerrar sesión.');
  }
};


    return (
        <View style={styles.container}>
          <PageTitle username={user?.displayName} title='Bienvenid@'/>
         <SettingForm/>
         <View style={styles.logoutcontainer}>
         <ButtonTransparent 
            title={'Cerrar Sesión'}
            color={'black'}
            onPress={logOut}
            icon='logout'
            direction='left'
            />
         </View>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:'8%',
    backgroundColor:Colors.white,
    flex:1,
    justifyContent:'flex-start'
  },
  logoutcontainer:{
    marginTop: '90%'
  }
});
