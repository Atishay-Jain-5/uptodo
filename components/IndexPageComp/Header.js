import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
const Header = () => {
  return (
    <View style={{padding:10}}>

    <Appbar.Header style={{backgroundColor:"#121212",}} dark={true} >
    <MaterialCommunityIcons name="filter-variant" size={34} color="white" />
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    {/* <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> */}

    <Appbar.Content titleStyle={{textAlign:"center"}}  title="Index" />
    {/* </View> */}
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    <Avatar.Image size={34} source={require('../../assets/images/Depositphotos_484354208_S.jpg')} />
  </Appbar.Header>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})