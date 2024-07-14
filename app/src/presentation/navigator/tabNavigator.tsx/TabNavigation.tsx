import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import TemplatesScreen from '../../screens/TemplatesScreen';


export type TabStackParams = {
    Home: undefined;
    Templates: undefined,
    Settings:undefined
  
  }


const Tab = createBottomTabNavigator<TabStackParams>();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Templates" component={TemplatesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      );
}

export default TabNavigation

