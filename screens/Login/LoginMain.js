import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
// import FirebaseAuth from '../../FirebaseConfig.js'
import {FirebaseAuth} from '../../FirebaseConfig'
import { ToastAndroid } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
// import AntDesign from '@expo/vector-icons/AntDesign';
import { UserContext } from "@/Context/UserContext";
const LoginMain = ({ navigation }) => {
  const {userstatus,setUserstatus}=useContext(UserContext)
  const [email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const auth = FirebaseAuth
  const onSignin = () => {
    if (!Password  || !email) {
      ToastAndroid.show("please enter all details",ToastAndroid.TOP)
      return;
    }
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // console.log(user)
          setUserstatus(true);
        // navigation.navigate("BottomTabsStack", { screen: "BottomTabsStack" })
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        if(errorCode==='auth/invalid-credential'){
          setUserstatus(false)
          ToastAndroid.show("Email or Password doesn't Match",ToastAndroid.CENTER)
        }
      });
  };
  return (
    <View style={styles.main}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate("StartScreen")}>
          <AntDesign name="back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.hcontain}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.sub}>Email</Text>
        <TextInput
         selectionColor={"white"}
        value={email}
        onChangeText={(text)=>setEmail(text)}
          style={styles.inputbox}
          placeholder="Enter Your Email "
          placeholderTextColor="white"
        ></TextInput>
        <Text style={styles.sub}>Password</Text>
        <TextInput
        
        value={Password}
        selectionColor={"white"}
        onChangeText={(pass)=>setPassword(pass)}
          secureTextEntry={true}
          style={styles.inputbox}
          placeholder="Enter Your Password "
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.opac} onPress={()=>onSignin()}>
          <Text style={styles.sub11}>Login</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 40 }}
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
          <Text style={styles.sub11}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.opac1}>
          <AntDesign name="apple1" size={24} color="white" />
          <Text style={styles.sub11}>Login with Apple</Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 90,
          }}
        >
          <Text style={styles.sub}>Don’t have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("RegisterStack", { screen: "RegisterMain" })}>
            <Text style={styles.sub1111}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginMain;

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
    marginTop: 70,
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
