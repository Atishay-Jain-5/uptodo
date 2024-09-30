import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useContext } from "react";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import {FirebaseAuth} from '../../FirebaseConfig'
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { useState } from "react";
  import { ToastAndroid } from "react-native";
  import { UserContext } from "@/Context/UserContext";
const RegisterMain = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const auth = FirebaseAuth
    const {userstatus,setUserstatus}=useContext(UserContext)
    const createNewAcc = () => {
        if (!Password  || !email) {
          ToastAndroid.show("please enter all details",ToastAndroid.TOP)
          return;
        }
        createUserWithEmailAndPassword(auth, email, Password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // updateProfile(user, {
            //   displayName: fullname,
            // })
            // console.log(user);
            setUserstatus(true);
          })
          .catch((error) => {
            setUserstatus(false);
            const errorMessage = error.message;
            console.error(errorMessage);
            alert("Error: " + errorMessage);
          });
      };
  return (
    <View style={styles.main}>
    <View style={styles.back}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="back" size={30} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.hcontain}>
      <Text style={styles.heading}>Register</Text>
    </View>
    <View style={styles.input}>
      <Text style={styles.sub}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text)=>setEmail(text)}
          style={styles.inputbox}
          placeholder="Enter Your Email "
          placeholderTextColor="white"
        ></TextInput>
      <Text style={styles.sub}>Password</Text>
      <TextInput
        value={Password}
        onChangeText={(pass)=>setPassword(pass)}
          secureTextEntry={true}
          style={styles.inputbox}
          placeholder="Enter Your Password "
          placeholderTextColor="white"
        ></TextInput>
       <Text style={styles.sub}>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.inputbox}
        placeholder="Enter Your Password "
        placeholderTextColor="white"
      ></TextInput>
    </View>
    <View>
      <TouchableOpacity style={styles.opac} onPress={()=>createNewAcc()}>
        <Text style={styles.sub11}>Register</Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#878787" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", color: "white" }}>
            or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#878787" }} />
      </View>
    </View>
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity style={styles.opac1}>
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.sub11}>Register with Google</Text>
      </TouchableOpacity>
    </View>
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity style={styles.opac1}>
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={styles.sub11}>Register with Apple</Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={styles.sub}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("LoginStack", { screen: "LoginMain" })}>
          <Text style={styles.sub1111}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default RegisterMain

const styles = StyleSheet.create({
    sub1111: {
      marginBottom: -10,
      color: "white",
      fontSize: 17,
      textAlign: "left",
      fontWeight: "bold",
    },
    sub11: {
      color: "white",
      fontSize: 17,
      textAlign: "center",
    },
    inputbox: {
      width: "92%",
      padding: 13,
      color: "white",
      backgroundColor: "#1d1d1d",
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 5,
    },
    input: {
      padding: 10,
      gap: 15,
      display: "flex",
      marginTop: 30,
      marginLeft: 40,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "100%",
    },
    main: {
      flex: 1,
      // height:"90%",
      alignItems: "center",
      // justifyContent:"center",
      backgroundColor: "#121212",
    },
    back: {
      display: "flex",
      width: "100%",
      paddingTop: 50,
      padding: 10,
      alignItems: "flex-start",
    },
    heading: {
      color: "white",
      fontSize: 37,
      textAlign: "left",
      fontWeight: "semibold",
      // justifyContent:"center"
    },
    hcontain: {
      display: "flex",
      marginTop: 30,
      gap: 25,
      // paddingHorizontal:20,
      width: "100%",
      marginLeft: 40,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    sub: {
      marginBottom: -10,
      color: "#e0e0e0",
      fontSize: 17,
      textAlign: "left",
    },
    sub1: {
      color: "white",
      fontSize: 17,
      textAlign: "left",
    },
    buttoncontain: {
      marginBottom: 100,
      flex: 1,
      gap: 20,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    opac: {
      marginTop: 30,
      width: 350,
      padding: 20,
      paddingVertical: 15,
      borderRadius: 5,
      backgroundColor: "#8875ff",
    },
    opac1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      flexDirection: "row",
      width: 350,
      padding: 15,
      borderColor: "#8875ff",
      borderWidth: 2,
      // paddingVertical:20,
      borderRadius: 5,
      backgroundColor: "black",
    },
  });
  