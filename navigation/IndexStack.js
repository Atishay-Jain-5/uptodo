import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Index/HomeScreen';
import EditTask from '../screens/Index/EditTask'
const IndexStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="EditTask" component={EditTask}></Stack.Screen>
        
    {/* <Stack.Screen name="First" component={First}></Stack.Screen>
    <Stack.Screen name="Second" component={Second}></Stack.Screen>
    <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen> */}
  </Stack.Navigator>
  )
}

export default IndexStack