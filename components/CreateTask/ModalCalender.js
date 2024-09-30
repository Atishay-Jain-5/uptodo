import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalCalender = () => {
  return (
    <View style={styles.main}>
    <Text style={styles.heading}>Add Task</Text>
    {/* <View style={{ backgroundColor: "#979797", height: 2, width: "95%" }} /> */}
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Name"
      style={[styles.inp,  focus1 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(true) 
        setFocus2(false)}}
    />
    <TextInput
      placeholderTextColor={"white"}
      placeholder="Description"
      style={[styles.inpdesc, focus2 && { borderColor: "#e5e5e5", borderWidth: 2 }]}
      onFocus={()=>{setFocus1(false) 
        setFocus2(true)}}
    ></TextInput>
    <View style={styles.outerico}>

    <View style={styles.iconscont}>
        <TouchableOpacity onPress={()=>showDatepicker()}>

      <FontAwesome5 name="stopwatch" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setModalVisible2(true)}>
      <FontAwesome name="tag" size={24} color="white" />
      </TouchableOpacity>
      <FontAwesome6 name="font-awesome-flag" size={24} color="white" />
    </View>
    <MaterialIcons name="navigate-next" size={33} color="white" />
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

export default ModalCalender

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

  },
  inpdesc: {
    width: "90%",
    // borderColor: "#e5e5e5",
    // borderWidth: 2,
    borderRadius: 10, 
    height: 50, 
    padding: 15, 
    fontSize: 16,
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
})