import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../screens/Profile/Settings';
const SettingsStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
       
       <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
    {/* <Stack.Screen name="First" component={First}></Stack.Screen>
    <Stack.Screen name="Second" component={Second}></Stack.Screen>
    <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen> */}
  </Stack.Navigator>
  )
}

export default SettingsStack