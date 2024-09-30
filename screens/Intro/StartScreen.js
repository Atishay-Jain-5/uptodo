import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const StartScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
<View style={styles.back}>
<TouchableOpacity onPress={()=>navigation.goBack()}>

      <AntDesign name="back" size={30} color="white" />
</TouchableOpacity>
</View>
<View style={styles.hcontain}>

      <Text style={styles.heading}>Welcome to UpTodo</Text>
      <Text style={styles.sub}>Please login to your account or create new account to continue</Text>
</View>
<View style={styles.buttoncontain}>

<TouchableOpacity style={styles.opac} >
  <Text style={styles.sub1} onPress={()=>navigation.navigate("LoginStack", { screen: "LoginMain" })}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.opac1} onPress={()=>navigation.navigate("RegisterStack", { screen: "RegisterMain" })} >
  <Text style={styles.sub1}>Create Account</Text>
</TouchableOpacity>
</View>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  main:{
    flex:1,
    // height:"90%",
    alignItems:"center",
    // justifyContent:"center",
    backgroundColor:"#121212"
  },
  back:{
   display:"flex",
   width:"100%",
   paddingTop:50,
   padding:10,
    alignItems:"flex-start"
  },
  heading:{
    color:"white",
    fontSize:33,
    textAlign:"center"
    // justifyContent:"center"
  },
  hcontain:{
   display:"flex",
    marginTop:30,
    gap:25,
    paddingHorizontal:20,

    // justifyContent:"center"
  },
  sub:{
    color:"grey",
    fontSize:17,
    textAlign:"center"
  },
  sub1:{
    color:"white",
    fontSize:17,
    textAlign:"center"
  },
  buttoncontain:{
   marginBottom:100,
   flex:1,
   gap:20,
   justifyContent:"flex-end",
   alignItems:"center"
   
  },
  opac:{
   width:350,
    padding:20,
    // paddingVertical:20,
    borderRadius:5,
    backgroundColor:"#8875ff"
  },
  opac1:{
    width:350,
     padding:20,
     borderColor:"#8875ff",
     borderWidth:2,
     // paddingVertical:20,
     borderRadius:5,
     backgroundColor:"black"
   }
})