import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from 'react';
import { FirebaseAuth } from "@/FirebaseConfig";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import CheveronButton from '@/components/ProfileComp/CheveronButton'
import ModalProfile from '@/components/ProfileComp/ModalProfile'
import BottomSheet1 from '@/components/ProfileComp/BottomSheet'
import { useRef } from "react";
const Profile = ({navigation}) => {
  const [isOpen, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const email = FirebaseAuth?.currentUser?.email;
  const obj={
    icon:""
  }
  // console.log(modalVisible); 
  const refRBSheet = useRef();
const [type,setType]=useState("")
  return (
    <ScrollView style={{flex:1,}} contentContainerStyle={{flexGrow: 1, justifyContent: "center",backgroundColor:"#121212"}}>

    <View style={styles.main}>
      <View style={{ marginTop: 45 }}>
        <Text style={styles.heading}>Profile</Text>
      </View>
      <View style={styles.imgcont}>
        <Image
          style={{ width: 90, height: 90, borderRadius: 99 }}
          source={require("../../assets/images/profile.png")}
        />

        <Text style={styles.sub1}>{email ? email : "Profile"}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "auto",
              padding: 10,
              backgroundColor: "#363636",
              borderRadius: 5,
            }}
          >
            <Text style={styles.sub1}>10 Task left</Text>
          </View>
          <View
            style={{
              width: "auto",
              padding: 10,
              backgroundColor: "#363636",
              borderRadius: 5,
            }}
          >
            <Text style={styles.sub1}>5 Task Done</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 20,
            gap:10
          }}
        >
          <Text style={styles.sub11}>Settings</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("SettingsStack", { screen: "Settings" })}>

         <CheveronButton icon={"App Settings"}></CheveronButton>
          </TouchableOpacity>
          <Text style={styles.sub11}>Account</Text>
          
          <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible) 
            setType("name")}}>

          <CheveronButton icon={"Change Account Name"} ></CheveronButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible) 
            setType("pass")}}>
         <CheveronButton icon={"Change Account Password"}></CheveronButton>
         </TouchableOpacity>
         <TouchableOpacity    onPress={() => refRBSheet.current.open()}>

         <CheveronButton icon={"Change Account Image"}></CheveronButton>
         </TouchableOpacity>
          <Text style={styles.sub11}>UpToDo</Text>
         <CheveronButton icon={"About Us"}></CheveronButton>
       <CheveronButton icon={"FAQ"}></CheveronButton>
        
           <CheveronButton icon={"Help and FeedBack"}></CheveronButton>
          <CheveronButton icon={"Support Us"}></CheveronButton>
         <CheveronButton icon={"logout"}></CheveronButton>
     
        </View>
      </View>
    </View>
    <ModalProfile modalVisible={modalVisible} setModalVisible={setModalVisible} type={type}></ModalProfile>
 

    <BottomSheet1 ref={refRBSheet}></BottomSheet1>
  
    
    </ScrollView>

  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
  
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#121212",
    gap: 5,
    
  },
  heading: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  hcontainer: {
    marginTop: 70,
  },
  sub1: {
    padding: 10,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  sub11: {
    padding: 10,
    paddingLeft:3,
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  opac: {
    marginTop: 20,
    alignItems: "center",
    width: "auto",
    padding: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "#8875ff",
  },
  imgcont: {
    marginTop: 20,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 99,
    marginBottom:30
  },
});
