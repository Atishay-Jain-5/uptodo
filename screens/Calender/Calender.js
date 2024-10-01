import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CalendarTop from "../../components/calendar/CalendarTop";
import { TasksContext } from "@/Context/TasksContext";
import { FlatList } from "react-native";
import IndexPageTaskCont from "@/components/IndexPageComp/IndexPageTaskCont";
const Calender = () => {
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);
  const {userTasks,setuserTasks}=useContext(TasksContext);
  const [completedTask,setCompletedTask]=useState([]);
  const [date_wise,set_date_wise]=useState([]);
  const [date,setDate]=useState(new Date().toLocaleDateString())
  const [completed,setCompleted]=useState([])
  useEffect(() => {
    if (userTasks.length > 0&&select1) {
     
      const filtered = userTasks.filter(i => {
        if (i?.date) {
          const taskDate = i.date.toLocaleDateString(); 
          console.log(date + "  " + taskDate);
          return taskDate === date; 
        }
        return false; 
      });
  
      set_date_wise(filtered); 
    }
    else if(userTasks.length > 0&&select2){
      const filtered = userTasks.filter(i => {
        if (i?.date) {
          const taskDate = i.date.toLocaleDateString(); 
          console.log(date + "  " + taskDate);
          return taskDate === date && i?.completed===true; 
        }
        return false; 
      });
  
      set_date_wise(filtered); 
    }
    console.log(date_wise); 
  }, [date, userTasks,select1,select2,]);
//  useEffect(()=>{
//     const data=date_wise.filter(i=>{
//       if(i?.completed){
//         // console.log(i?.completed)
//         return i?.completed===true;
//       }
//     })
//     setCompleted(data)
    
//  },[date,select1,select2,])
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Calender</Text>
      <CalendarTop setDate={setDate}/>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 10,
          backgroundColor: "#4c4c4c",
          padding: 20,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setSelect1(true);

            setSelect2(false);
          }}
        >
          <View
            style={[
              styles.buttons,
              select1 && {
                borderWidth: 0,
                backgroundColor: "#8687e7",
              },
            ]}
          >
            <Text style={styles.sub1}>Today</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelect2(true);

            setSelect1(false);
          }}
        >
          <View
            style={[
              styles.buttons,
              select2 && {
                borderWidth: 0,
                backgroundColor: "#8687e7",
              },
            ]}
          >
            <Text style={styles.sub1}>Completed</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.flistcont}>

      <FlatList
  scrollEnabled={true}
  data={date_wise }
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => {
    // if (!item || !item.index) {
      //   console.log("here")
      //   return null; 
      // }
      
      return (
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginVertical: 10,
        }}
        >
        <IndexPageTaskCont index={item.index} obj={item} />
      </View>
    );
  }}
/>
  </View>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#121212",
    gap: 20,
    alignItems: "center",
  },
  heading: {
    marginTop: 45,
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  Btcontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttons: {
    width: 150,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "#4c4c4c",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  sub1: {
    padding: 10,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  flistcont:{
    padding:10
  }
});
