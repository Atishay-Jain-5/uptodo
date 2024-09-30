import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginMain from '../screens/Login/LoginMain';
const LoginStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="LoginMain" component={LoginMain}></Stack.Screen>
    {/* <Stack.Screen name="First" component={First}></Stack.Screen>
    <Stack.Screen name="Second" component={Second}></Stack.Screen>
    <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen> */}
  </Stack.Navigator>
  )
}

export default LoginStack