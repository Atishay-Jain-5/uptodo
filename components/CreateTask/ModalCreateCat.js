import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ModalIcons from "@/components/CreateTask/ModalIcons";
import { useContext } from "react";
import { CategoryContext } from "@/Context/CategoryContext";
const ModalCreateCat = ({setModalVisible4}) => {
  const selected = false;
  const colors = [
    "#c9cc41",
    "#66cc41",
    "#41cca7",
    "#4181cc",
    "#41a2cc",
    "#cc8441",
    "#9741cc",
    "#cc4173",
  ];
  const [selecticon, set_selecticon] = useState(false);
  const [userSelection, setuserSelection] = useState();
  const [userColor, setUserColor] = useState();
  const [userName,setUserName] = useState("");
  const {categories,setcategories}=useContext(CategoryContext)
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Create new category</Text>
      <Text style={styles.sub1}>Category name :</Text>
      <TextInput
        placeholderTextColor={"#939393"}
        placeholder="Category name"
        // value={task_desc}
        // onChangeText={(text)=>{set_task_desc(text)
    onChangeText={(text)=>setUserName(text)}
        // }}
        style={styles.inpdesc}
        // onFocus={()=>{setFocus1(false)
        //   setFocus2(true)}}
      ></TextInput>
      <Text style={styles.sub1}>Category icon :</Text>
      <TouchableOpacity
        onPress={() => set_selecticon(!selecticon)}
        style={{ padding: 15, backgroundColor: "#444444", borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Choose icon from library</Text>
      </TouchableOpacity>
      <Text style={styles.sub1}>Category color :</Text>
      <View style={styles.colorCont}>
        {colors.map((i) => (
          <TouchableOpacity onPress={() => setUserColor(i)}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: `${i}`,
                borderRadius: 99,
                borderWidth: userColor === i ? 2 : 0,
                borderColor: selected ? "blue" : "white",
              }}
            ></View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {
         
          setModalVisible4(false)}}>
          <View style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setcategories((prev) => {
            const newCategory = {
              icon: userSelection,
              title: userName,
              color: userColor,
            };
      
            
            const newCategories = [...prev.slice(0, -1), newCategory, prev[prev.length - 1]];
      
            return newCategories;
          })
          setModalVisible4(false)
          }}>
          <View style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        // statusBarTranslucent={true}
        visible={selecticon}
        presentationStyle="overFullScreen"
        onRequestClose={() => set_selecticon(false)}
      >
        <View style={styles.topView}>
          <View style={styles.modalView}>
            <ModalIcons
              selecticon={selecticon}
              set_selecticon={set_selecticon}
              userSelection={userSelection}
              setuserSelection={setuserSelection}
            ></ModalIcons>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCreateCat;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#121212",
    alignItems: "flex-start",
    padding: 20,
    borderRadius: 10,
    flexDirection: "column",
    gap: 20,
    marginBottom: 10,
  },
  heading: {
    color: "#e5e5e5",
    fontSize: 22,
  },
  sub1: {
    color: "#e5e5e5",
    fontSize: 18,
  },
  inpdesc: {
    width: "95%",
    borderColor: "#939393",
    borderWidth: 2,
    borderRadius: 5,
    height: "auto",
    padding: 15,
    fontSize: 16,
  },
  colorCont: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  topView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22,
    height: "100%",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#121212",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
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
