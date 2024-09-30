import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from '@/screens/Intro/First';
import HomeScreen from '@/screens/Index/HomeScreen';
import IndexStack from '@/navigation/IndexStack';
const BottomTab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={"HomeScreen"}></Tab.Screen>
      </Tab.Navigator>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})