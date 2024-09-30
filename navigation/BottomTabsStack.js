import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../components/bottomTab/BottomTab';
import SettingsStack from '../navigation/SettingsStack'
const BottomTabsStack = () => {
    const Stack=createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="BottomTab" component={BottomTab}></Stack.Screen>
        <Stack.Screen name="SettingsStack" component={SettingsStack}></Stack.Screen>
    {/* <Stack.Screen name="First" component={First}></Stack.Screen>
    <Stack.Screen name="Second" component={Second}></Stack.Screen>
    <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen> */}
  </Stack.Navigator>
  )
}

export default BottomTabsStack

const styles = StyleSheet.create({})