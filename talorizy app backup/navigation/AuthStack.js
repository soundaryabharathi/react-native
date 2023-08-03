import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import userlogin from '../screens/userlogin';
import userRegistration from '../screens/userReg'
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}  
        options={{ header: () => null }}
      />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='userlogin' component={userlogin} />
      <Stack.Screen name='userRegistration' component={userRegistration} />
      
      
    </Stack.Navigator>
  );
}