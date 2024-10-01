import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

const NameModalBox = ({setModalVisible}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Change Account Name</Text>
      <View style={{ backgroundColor: "#979797", height: 2, width: "95%" }} />
      <TextInput
       selectionColor={"white"}
        placeholderTextColor={"white"}
        placeholder="Name"
        style={styles.inp}
      />
      <View style={styles.buttonContainer}>
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
      </View>
    </View>
  );
};

export default NameModalBox;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    width: 300, 
    height: 200, 
    backgroundColor: "#363636",
    alignItems: "center",
    padding: 10,
    borderRadius: 10, 
    flexDirection: "column",
    gap: 15, 
  },
  heading: {
    color: "#e5e5e5",
    fontSize: 18, 
  },
  inp: {
    width: "90%",
    borderColor: "#e5e5e5",
    borderWidth: 2,
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
});
