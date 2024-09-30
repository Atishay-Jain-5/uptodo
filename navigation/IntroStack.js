import { View, Text } from 'react-native'
import React from 'react'
import First from '../screens/Intro/First'
import Second from '../screens/Intro/Second'
import StartScreen from '../screens/Intro/StartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const IntroStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
    <Stack.Screen name="First" component={First}></Stack.Screen>
    <Stack.Screen name="Second" component={Second}></Stack.Screen>
    <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen>
  </Stack.Navigator>
  )
}

export default IntroStack