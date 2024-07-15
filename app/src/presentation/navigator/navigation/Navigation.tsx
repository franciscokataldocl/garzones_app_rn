import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../../../components/Loading/LoadingScreen';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import LoginScreen from '../../screens/LoginScreen';
import OnBoardScreen from '../../screens/OnBoardScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import TabNavigation from '../tabNavigator.tsx/TabNavigation';


export type RootStackParams = {
    OnBoard: undefined;
    Login: undefined,
    Register:undefined
    TabStack:{ user: FirebaseAuthTypes.User | null };
  
  }
  const Stack = createStackNavigator<RootStackParams>();
  



  export const Navigation = () =>{
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      return auth().onAuthStateChanged(user => {
        setUser(user);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return <LoadingScreen />;
    }
  
   return (
     <Stack.Navigator >
       {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} /> */}
       
       {user ? (
          <Stack.Screen
          name="TabStack"
          component={TabNavigation}
          initialParams={{ user: user }}
          
        />
        ):(
          <>
          <Stack.Screen name="OnBoard" component={OnBoardScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}  />
          {/* options={{headerShown: false}} */}
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
          </>
          
        )}
     </Stack.Navigator>
   );
  }