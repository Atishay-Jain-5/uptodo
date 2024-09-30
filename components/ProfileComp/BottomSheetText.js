import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";


const BottomSheetText = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Change Account Image</Text>
      <View style={{ backgroundColor: "#979797", height: 2, width: "95%" }} />
      <View style={{display:"flex",flexDirection:"column",gap:30,justifyContent:"flex-start",width:"95%",marginTop:15}}>

      <Text style={styles.heading}>Take Picture</Text>
      <Text style={styles.heading}>Import from Gallery</Text>
      <Text style={styles.heading}>Import from Google Drive</Text>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity >
          <View style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default BottomSheetText

const styles = StyleSheet.create({
    main: {
      flex:1,
    //   width: 300, 
    //   height: 200, 
      backgroundColor: "#363636",
      alignItems: "center",
      padding: 10,
    //   borderRadius: 10, 
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
    //   borderRadius: 10, 
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
  });
  