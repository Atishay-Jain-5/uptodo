import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Button} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from 'react'
import Modal1 from '../../components/CreateTask/Modal1'
import ModalMain from '../../components/CreateTask/ModalMain'
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
const AddTask = () => {
  const [visi_mi,setvisi_mi]=useState(true)
  const [visi_mi2,setvisi_mi2]=useState(false)
  const [visi_mi3,setvisi_mi3]=useState(false)
  const [visi_mi4,setvisi_mi4]=useState(false)
  const [modalVisible, setModalVisible]=useState(true)
  const [type,settype]=useState("default")
  const [showTime,setShowTime]=useState(false)
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true); 
      settype("default")
    }, [])
  );
//   const [date, setDate] = useState(new Date());

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate;
//     setDate(currentDate);
//     if (!showTime) {
//       setShowTime(true);
//     }
//   };
//   const showMode = (currentMode) => {
//     DateTimePickerAndroid.open({
//       value: date,
//       onChange,
//       mode: currentMode,
//       is24Hour: true,
//     });
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };
// useEffect(()=>{
//   if(type==='date'){
//     showDatepicker()
//   }

// },[type])
// useEffect(() => {
//   if (showTime) {
//     showTimepicker();
//     setShowTime(false);  
//     // settype('default')
//   }
// }, [showTime]);
  return (
    <View style={styles.main}>
        {/* <Text style={{color:"white"}}>Hello</Text> */}
        {
          type==='default'&&
          <ModalMain modalVisible={modalVisible} setModalVisible={setModalVisible} type={type} settype={settype}></ModalMain>
        }
        
        {

        }
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"flex-end",
    backgroundColor:"#121212",
   
  }
})