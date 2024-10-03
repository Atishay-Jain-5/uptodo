import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const FocusCards = ({data}) => {
  // console.log(data.appName)
  // const obj=[{icon:"https://img.icons8.com/?size=100&id=13963&format=png&color=000000"}]
  return (
    <View style={styles.main}>
   <Image 
        source={{ uri: data.img }} 
        style={{ width: 45, height: 45 }} 

      />
      <View style={{flex:1,flexDirection:"column",gap:10,}}>

      <Text style={{fontSize:16 , color:"white"}}>{data.appName}</Text>
      <Text style={{fontSize:13 , color:"white"}}>You Spent {data.time} hrs on {data.appName} today</Text>
      </View>
      <Image 
        source={{ uri: "https://img.icons8.com/ios/50/vertical-line.png" }} 
        style={{ width: 45, height: 45 }} 

      />
      <AntDesign name="exclamationcircleo" size={24} color="black" />
    </View>
  )
}

export default FocusCards

const styles = StyleSheet.create({
    main:{
        display:"flex",
        width:"95%",
        borderRadius:3,
        height:"auto",
        padding:10,
        backgroundColor:"#4c4c4c",
        flexDirection:"row",
        gap:10,
        alignItems:"center"
        // marginBottom:20
    }
})