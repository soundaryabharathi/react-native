import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import customerscreen from '../screens/customerdashboard';

const Stack = createStackNavigator();
export default function HomeStacks() {
  return (
    <Stack.Navigator
        screenOptions={{
    headerShown: false
  }}
>
      <Stack.Screen name='CUSTOMER DASHBOARD' component={customerscreen} screenoptions='false'/>
     
    </Stack.Navigator>
  );
}