import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import customerscreen from '../screens/customerdashboard';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
        screenOptions={{
    headerShown:false  }}
>


<Stack.Screen name='Homescreen' component={HomeScreen} screenoptions='false'/>    


     
   
     
     
    </Stack.Navigator>
    
    
    
  );
}