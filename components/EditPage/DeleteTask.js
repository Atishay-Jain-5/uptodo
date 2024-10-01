import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { TasksContext } from '@/Context/TasksContext'
import { TouchableOpacity } from 'react-native'
import { UserContext } from '@/Context/UserContext'
import { EditTaskContext } from '@/Context/EditTaskContext'
import { useNavigation } from '@react-navigation/native'
const DeleteTask = ({setDeleteTask}) => {
    const navigation=useNavigation()
const { userTasks,setuserTasks}=useContext(TasksContext)
const {taskIndex, setTaskIndex}=useContext(EditTaskContext)
  return (
    <View style={styles.main}>
    <Text style={styles.heading}>Delete Task</Text>
    <View style={styles.separator} />
    <Text style={styles.heading}>Are You sure you want to delete this task?
    Task title : {userTasks[taskIndex].heading}</Text>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>setDeleteTask(false)} >
          <View style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => {
    const tasks = userTasks.filter((i) => i.index !== taskIndex);
    setuserTasks(tasks);
    setDeleteTask(false);
            navigation.navigate("Home")
  }}>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeleteTask

const styles = StyleSheet.create({
    main: {
        display: "flex",
        width: "100%", 
        height: "auto", 
        backgroundColor: "#363636",
        alignItems: "center",
        padding: 20,
        borderRadius: 10, 
        flexDirection: "column",
        gap: 15, 
        marginBottom:10,
      },
      heading: {
        color: "#e5e5e5",
        fontSize: 18, 
        textAlign:"center"
      },
      separator: {
        backgroundColor: "#979797",
        height: 2,
        width: "98%",
        marginVertical: 5,
      },
      buttonContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 15, 
        // paddingHorizontal: 20, 
        alignItems: "center",
      },
      cancelButton: {
        paddingHorizontal: 50, 
        paddingVertical: 10, 
        borderRadius: 10,
      },
      cancelText: {
        color: "#8687e7",
        fontSize: 16, 
      },
      editButton: {
        backgroundColor: "#8687e7",
        paddingHorizontal: 50, 
        paddingVertical: 10,
        borderRadius: 5,
      },
      editText: {
        color: "white",
        fontSize: 16, 
      },
})