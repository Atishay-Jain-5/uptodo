import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TasksContext } from "../../Context/TasksContext";
const ModalPriority = ({modalVisible2,setModalVisible2}) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [back, setback] = useState(0);
  const { userTasks, setuserTasks } = useContext(TasksContext);
  // useEffect(() => {
  //   console.log(userTasks);
  // }, [userTasks]);
  return (
    <View style={styles.main}>
      <View style={styles.centerAlign}>
        <Text style={styles.heading}>Task priority</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.iconscont}>
        {data.map((i) => (
          <TouchableOpacity
            onPress={() => {
              setback(i);
              setuserTasks((prevTasks) => {
                if (prevTasks.length > 0) {
                  const updatedTasks = [...prevTasks];
                  updatedTasks[updatedTasks.length - 1].Priority = i;
                  return updatedTasks;
                }
                return prevTasks;
              });
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: back === i ? "#8687e7" : "#272727",
                gap: 5,
                padding: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                justifyContent: "center",
                marginVertical: 5,
              }}
            >
              <FontAwesome name="flag" size={30} color="white" />
              <Text style={styles.heading}>{i}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* // <FontAwesome5 name="flag" size={40} color="#F4A261" />
        // <FontAwesome6 name="flag" size={40} color="#2A9D8F" />
        // <MaterialIcons name="flag" size={40} color="#264653" /> */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{setModalVisible2(false)
           setuserTasks((prevTasks) => {
            if (prevTasks.length > 0) {
              const updatedTasks = [...prevTasks];
              updatedTasks[updatedTasks.length - 1].Priority = "";
              return updatedTasks;
            }
            return prevTasks;
          });
        }}>
          <View style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setModalVisible2(false)}>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalPriority;

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
    marginBottom: 10,
  },
  centerAlign: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  heading: {
    color: "#e5e5e5",
    fontSize: 18,
    fontWeight: "600",
  },
  separator: {
    backgroundColor: "#979797",
    height: 2,
    width: "95%",
    marginVertical: 10,
  },
  iconscont: {
    marginLeft:6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: 10,
    alignItems:"center",
    gap: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelText: {
    color: "#8687e7",
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#8687e7",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editText: {
    color: "white",
    fontSize: 16,
  },
  idi_icon: {},
});
