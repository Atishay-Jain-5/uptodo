import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar } from 'react-native-paper';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';
import { TasksContext } from '@/Context/TasksContext';
import { EditTaskContext } from '@/Context/EditTaskContext';
const Header = () => {
  const {userTasks,setuserTasks}=useContext(TasksContext)
  const {taskIndex, setTaskIndex}=useContext(EditTaskContext)
  const [curr_filter,set_curr_filter]=useState("pri");
  const filter = () => {
   
    const tempTasks = [...userTasks];
    
    
    const lastTask = tempTasks.pop();  
    
  
    const sortedTasks = tempTasks.sort((a, b) => a.Priority - b.Priority);
    
   
    sortedTasks.push(lastTask);
    
  // sortedTasks.push(lastTask)
  console.log(sortedTasks)
    setuserTasks(sortedTasks);
  };
  return (
    <View style={{padding:10}}>

    <Appbar.Header style={{backgroundColor:"#121212",}} dark={true} >
      <TouchableOpacity onPress={()=>filter()}>

    <MaterialCommunityIcons name="filter-variant" size={34} color="white" />
      </TouchableOpacity>
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