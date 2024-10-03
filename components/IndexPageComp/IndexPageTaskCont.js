import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { CheckBox } from "react-native-elements";
import { cloneElement } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {EditTaskContext} from "@/Context/EditTaskContext"
const IndexPageTaskCont = ({ obj,index,   incrementChanges}) => {
  const navigation=useNavigation()
  const [checked, setchecked] = useState(false);
  const dateobj = obj?.date;
  // const datepart = dateobj?.toISOString()?.split("T")[0]||" ";
  // const timePart = dateobj?.toISOString()?.split("T")[1]?.split(".")[0]||" ";
  // console.log(timePart.slice(0,timePart.length-3))
  const localDate = dateobj?.toLocaleDateString();
  const localTime = dateobj?.toLocaleTimeString();
   const {taskIndex, setTaskIndex}=useContext(EditTaskContext)
  return (
    <View style={styles.main}>
      <CheckBox
        center
        // title='Click Here'
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={obj?.completed}
        containerStyle={styles.checkCont}
        onPress={() => {setchecked(!checked) 

          !checked?obj.completed=true:obj.completed=false;
          incrementChanges();  
        }}
      />
       <TouchableOpacity onPress={()=>{navigation.navigate("IndexStack", { screen: "EditTask" })
        setTaskIndex(index)
      }}>
      <View style={styles.taskText}>
        <Text style={styles.heading}>{obj.heading}</Text>
        <View style={styles.timeFlex}>
          <Text style={styles.heading2}>
            {localDate} At {localTime?.slice(0,4)}
          </Text>
          <View style={styles.iconcont}>
            <View style={styles.icon}>
              {obj?.icon&&cloneElement(obj?.icon, { size: 13 })}
              <Text style={{ color: "white" }}>{obj?.category}</Text>
            </View>
            <View style={styles.pri}>
            <FontAwesome name="flag" size={10} color="white" />
              <Text style={{ color: "white" }}>{obj?.Priority}</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default IndexPageTaskCont;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#363636",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    gap: 10,
  },
  heading: {
    color: "white",
    fontSize: 18,
    // textAlign: "center",
  },
  heading2: {
    color: "#afafaf",
    fontSize: 14,
    // textAlign: "center",
  },
  checkCont: {
    padding: 0,
    width: 10,
  },
  taskText: {
    gap: 5,
    width: "88%",
    flexDirection: "column",
  },
  timeFlex: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap:30
  },
  icon: {
    backgroundColor: "#809cff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  iconcont:{
    flexDirection:"row",
    gap:10,

  },
  pri:{
    flexDirection:"row",
    gap:5,
    alignItems:"center",
    borderColor:"white",
    borderWidth:1,
    borderRadius:5,
    padding:5,
  paddingHorizontal:8  }
});
