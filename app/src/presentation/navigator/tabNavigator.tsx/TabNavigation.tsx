import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import BottomTabLabel from '../../../components/bottomTabLabel/BottomTabLabel';
import { Colors } from '../../../constants/Colors';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import TemplatesScreen from '../../screens/TemplatesScreen';
import { RootStackParams } from '../navigation/Navigation';


export type TabStackParams = {
  Home: undefined;
  Templates: undefined,
  Settings: { user: FirebaseAuthTypes.User | null };

}

type TabNavigationProps = {
  route: RouteProp<RootStackParams, 'TabStack'>;
  navigation: NavigationProp<RootStackParams, 'TabStack'>;
};
const Tab = createBottomTabNavigator<TabStackParams>();

const TabNavigation = ({ route }: TabNavigationProps) => {
  const initialUser = route.params?.user || null;

  return (
    <Tab.Navigator initialRouteName='Home'
 
    screenOptions={({ route }) => ({
      tabBarStyle: { 
        position: 'absolute',
        bottom:'2%',
        left:'3%',
        right:'3%',
        backgroundColor:Colors.white,
        borderRadius:15,
        height:90,
        ...styles.shadow
      },
      tabBarActiveTintColor: Colors.secondary,
      tabBarInactiveTintColor: Colors.greyLight,
      tabBarShowLabel: false,
     
    })}

    
    
    
    >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <BottomTabLabel source='home' size={30} title='Home' focused={focused}/>
          
        ),
      }}
      />
      <Tab.Screen 
      name="Templates" 
      component={TemplatesScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <BottomTabLabel source='file-document' size={30} title='Templates' focused={focused}/>
          
        ),
      }}
      />
      <Tab.Screen 
      name="Settings" 
      component={SettingsScreen}
      initialParams={{ user: initialUser}}
      options={{
        tabBarIcon: ({focused}) => (
          <BottomTabLabel source='cog-outline' size={30} title='Settings' focused={focused}/>
          
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;

const styles = StyleSheet.create({
  shadow:{
    shadowColor:Colors.primary,
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
  }
})

