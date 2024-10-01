import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CheckBox } from "react-native-elements";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableWithoutFeedback } from "react-native";
import { Modal } from "react-native";
import EditTAndD from "./EditTAndD";
const HandD = ({ obj }) => {
  const [EditTaskVis,setEditTaskVis]=useState(false)
  return (
    <View style={styles.main}>
      <View style={styles.textCont}>
        <View
          style={{ flexDirection: "row", width: "98%", alignItems: "center" }}
        >
          <CheckBox
            center
            // title='Click Here'
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            // checked={checked}
            containerStyle={styles.checkCont}
            onPress={() => {
              setchecked(!checked);
              obj.completed = true;
              // changes++;
            }}
          />
          <View
            style={{
              width: "84%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.heading}>{obj?.heading}</Text>
            <TouchableOpacity onPress={()=>setEditTaskVis(true)}>

            <AntDesign name="edit" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 65 }}>
          <Text style={styles.sub1}>{obj.desc}</Text>
        </View>
      </View>
      <Modal
                animationType="slide"
                transparent={true}
                statusBarTranslucent={false}
                visible={EditTaskVis}
                presentationStyle="pageSheet"
                onRequestClose={() => setEditTaskVis(false)}> 
                  <TouchableWithoutFeedback onPress={() => setEditTaskVis(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <EditTAndD setEditTaskVis={setEditTaskVis} ></EditTAndD>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
    </View>
  );
};

export default HandD;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // padding:10
  },
  heading: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  sub1: {
    color: "#afafaf",
    fontSize: 17,
    textAlign: "left",
  },
  textCont: {
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start",
  },
  centeredView: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    height: "85%",
    // opacity:0.7

},
modalView: {
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#121212',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%"
},
});
