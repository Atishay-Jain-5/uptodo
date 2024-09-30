import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import CheveronButton from '@/components/ProfileComp/CheveronButton';
const Settings = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.hcontain}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>

      <Entypo name="chevron-left" size={30} style={{marginLeft:12}} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>Settings</Text>
      </View>
    <Text style={styles.sub11}>Settings</Text>
    <View style={styles.cheveron}>

    <CheveronButton icon={"Change app color"}></CheveronButton>
    <CheveronButton icon={"Change app typography"}></CheveronButton>
    <CheveronButton icon={"Change app language"}></CheveronButton>
    </View>
    <Text style={styles.sub11}>Import</Text>
    <View style={styles.cheveron}>

    <CheveronButton icon={"Import from Google calendar"}></CheveronButton>
    </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  main: {
  
    flex: 1,
    alignItems: "flex-start",
    // justifyContent:"center",
    backgroundColor: "#121212",
    gap: 5,
    
  },
  hcontain:{
    marginTop:"14%",
    width:"60%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  },
  heading: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  sub11: {
    padding: 10,
    paddingLeft:3,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginLeft:12
  },
  cheveron:{
    marginLeft:12,
    padding:10,
    gap:20
  }
})