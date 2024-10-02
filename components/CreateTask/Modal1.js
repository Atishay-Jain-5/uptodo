import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState,useEffect, useContext } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { TasksContext } from "@/Context/TasksContext";
import { useNavigation } from "@react-navigation/native";
const Modal1 = ({settype,type,modalVisible2,setModalVisible2,modalVisible3,setModalVisible3,modalVisible, setModalVisible}) => {
  const navigation=useNavigation();
  const [focus1,setFocus1]=useState(false);
  const [focus2,setFocus2]=useState(false);
  const [date, setDate] = useState(new Date());
  const [showTime,setShowTime]=useState(false)
  const [task_heading,set_task_heading]=useState("")
  const [task_desc,set_task_desc]=useState("")
  const {userTasks,setuserTasks}=useContext(TasksContext)
  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
   
      setuserTasks(prevTasks => {
        if (prevTasks.length > 0) {
          const updatedTasks = [...prevTasks];
          updatedTasks[updatedTasks.length - 1].date = ""; 
          return updatedTasks;
        }
        return prevTasks;
      });
      return;
    }

    const currentDate = selectedDate || date; 
    setDate(currentDate);

    setuserTasks(prevTasks => {
      if (prevTasks.length > 0) {
        const updatedTasks = [...prevTasks];
        updatedTasks[updatedTasks.length - 1].date = currentDate;
        return updatedTasks;
      }
      return prevTasks;
    });

    if (!showTime) {
      setShowTime(true);
    }
  };
  
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
useEffect(()=>{
  if(type==='date'){
    showDatepicker()
  }

},[type])
useEffect(() => {
  if (showTime) {
    showTimepicker();
    setShowTime(false);  
    // settype('default')
  }
}, [showTime]);
function compare( a, b ) {
  // const priorityA = a.Priority 
  //     const priorityB = b.Priority 
  //     console.log( a.Priority  + "  "+ b.Priority)
  // if (  a.Priority  >b.Priority ){
  //   return 1;
  // }
 return a.Priority>b.Priority
    // return -1;
  
  // return 0;
}


  return (
    <View style={styles.main}>
    <Text style={styles.heading}>Add Task</Text>
    {/* <View style={{ backgroundColor: "#979797", height: 2, width: "95%" }} /> */}
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Name"
      value={task_heading}
      selectionColor={"white"}
      onChangeText={(text)=>{set_task_heading(text)
        
      }}
      style={[styles.inp,  focus1 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(true) 
        setFocus2(false)}}
    />
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Description"
      value={task_desc}
      selectionColor={"white"}
      onChangeText={(text)=>{set_task_desc(text)
        
      }}
      style={[styles.inpdesc, focus2 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(false) 
        setFocus2(true)}}
    ></TextInput>
    <View style={styles.outerico}>

    <View style={styles.iconscont}>
        <TouchableOpacity onPress={()=>showDatepicker()}>

      <FontAwesome5 name="stopwatch" size={33} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setModalVisible3(true)
          // settype("priority")
        }}>
      <FontAwesome name="tag" size={33} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setModalVisible2(true)}>

      <FontAwesome6 name="font-awesome-flag" size={33} color="white" />
      </TouchableOpacity>
     
    </View>
    <TouchableOpacity
  onPress={() => {
    
   
    // setuserTasks((prevTasks) => {
    //   if (prevTasks.length > 0) {
    //     const updatedTasks = [...prevTasks];
    //     updatedTasks[updatedTasks.length - 1].heading = task_heading;
    //     return updatedTasks;
    //   }
    //   return prevTasks;
    // });
    setuserTasks((prevTasks) => {
      if (prevTasks.length > 0) {
        const updatedTasks = [...prevTasks];
        updatedTasks[updatedTasks.length - 1].desc = task_desc;
        updatedTasks[updatedTasks.length - 1].heading = task_heading;
        updatedTasks[updatedTasks.length - 1].Priority = 
        (updatedTasks[updatedTasks.length - 1].Priority === "" || 
         updatedTasks[updatedTasks.length - 1].Priority === undefined || 
         updatedTasks[updatedTasks.length - 1].Priority === null) 
        ? 1 
        : updatedTasks[updatedTasks.length - 1].Priority;
      
        updatedTasks[updatedTasks.length - 1].completed =false;
        // userTasks[userTasks.length - 1].completed = false;
        // updatedTasks.sort(compare);
        updatedTasks.forEach((task,index)=>{
          task.index=index
        })
        updatedTasks.push({});
        return updatedTasks;
      }
      return prevTasks;
    });

      // const updatedTasks = [...userTasks];
      navigation.navigate('Home');
      
    
    // setuserTasks((prevTasks) => {
    //   if (prevTasks.length > 0) {
    //     let updatedTasks = [...prevTasks];
       
    //     return updatedTasks;
    //   }
    //   return prevTasks;
    // });
    // navigation.navigate("BottomTabsStack", { screen: "Home" });
    setModalVisible(false); 
  }}
>
  <MaterialIcons name="navigate-next" size={33} color="white" />
</TouchableOpacity>

    </View>

    {/* <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
      <View style={styles.cancelButton}>
      <Text style={styles.cancelText}>Cancel</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
      <View style={styles.editButton}>
      <Text style={styles.editText}>Edit</Text>
      </View>
      </TouchableOpacity>
      </View> */}
  </View>
  )
}

export default Modal1

const styles = StyleSheet.create({
    main: {
        display: "flex",
        width: "100%", 
        height: "auto", 
        backgroundColor: "#363636",
        alignItems: "flex-start",
        padding: 20,
        borderRadius: 10, 
        flexDirection: "column",
        gap: 15, 
        marginBottom:10,
      },
      heading: {
        color: "#e5e5e5",
        fontSize: 18, 
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
      }
    });
    