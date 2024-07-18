import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../../../components/Loading/LoadingScreen';

import auth from '@react-native-firebase/auth';
import { UserData } from '../../../types/userData.type';
import LoginScreen from '../../screens/LoginScreen';
import OnBoardScreen from '../../screens/OnBoardScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import TabNavigation from '../tabNavigator.tsx/TabNavigation';

export type RootStackParams = {
    OnBoard: undefined;
    Login: undefined;
    Register: undefined;
    TabStack: { user: UserData };
}



const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const [user, setUser] = useState<UserData | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                };
                setUser(userData);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Screen
                    name="TabStack"
                    component={TabNavigation}
                    initialParams={{ user }}
                    options={{ headerShown: false }}
                />
            ) : (
                <>
                    <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                </>
            )}
        </Stack.Navigator>
    );
}
