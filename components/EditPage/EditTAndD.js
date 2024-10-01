import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { TasksContext } from '@/Context/TasksContext'
import { useState } from 'react'
import { EditTaskContext } from '@/Context/EditTaskContext'
import { useContext } from 'react'
const EditTAndD = ({setEditTaskVis}) => {
    const { taskIndex, setTaskIndex } = useContext(EditTaskContext);
    const { userTasks, setuserTasks } = useContext(TasksContext);
  const [task_heading,set_task_heading]=useState("")
  const [task_desc,set_task_desc]=useState("")
  const [focus1,setFocus1]=useState(false);
  const [focus2,setFocus2]=useState(false);
    return (

    <View style={styles.main}>
    <Text style={styles.heading}>Edit Task</Text>
    <View style={styles.separator} />
    {/* <View style={{ backgroundColor: "#979797", height: 2, width: "95%" }} /> */}
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Name"
      value={task_heading}
      selectionColor={"white"}
      onChangeText={(text)=>{set_task_heading(text)
      }}
      style={[styles.inpdesc, focus1 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(true) 
        setFocus2(false)}}
    />
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Description"
      value={task_desc}
      onChangeText={(text)=>{set_task_desc(text)
        
      }}
      selectionColor={"white"}
      style={[styles.inpdesc, focus2 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(false) 
        setFocus2(true)}}
    ></TextInput>
   <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>setEditTaskVis(false)} >
          <View style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{
            const tasks=[...userTasks]
            tasks[taskIndex]={...userTasks[taskIndex],heading:task_heading,desc:task_desc}
            setuserTasks(tasks)
            setEditTaskVis(false)}}>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditTAndD

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
        fontSize: 22, 
      },
      inp: {
        width: "90%",
    //   borderColor: "#e5e5e5",
    //  borderWidth: 2,
        borderRadius: 10, 
        height: 50, 
        padding: 15, 
        fontSize: 16,
        color:"white"
      },
      inpdesc: {
        width: "90%",
        // borderColor: "#e5e5e5",
        // borderWidth: 2,
        borderRadius: 10, 
        height: 50, 
        padding: 15, 
        fontSize: 16,
         color:"white"
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
      iconscont:{
        display:"flex",
        // paddingLeft:15,
        flexDirection:"row",
        gap:30,
        alignItems:"center"
      },
      outerico:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between"        
      },
      separator: {
        backgroundColor: "#979797",
        height: 2,
        width: "98%",
        marginVertical: 5,
      },
})