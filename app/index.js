import { Text, View } from "react-native";
import { Image } from "react-native";
// import first from '../screens/First.js'
import IntroStack from '../navigation/IntroStack'
import LoginStack from '../navigation/LoginStack'
// import IntroStack from "../navigation/IntroStack";
import IndexStack from '../navigation/IndexStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
import RegisterStack from '../navigation/RegisterStack'
// import BottomTab from "@/components/bottomTab/BottomTab";
// import B from '../navigation/tabs'
// import BottomTab from "@/components/bottomTab/BottomTab";
import { UserContext } from "@/Context/UserContext";
import BottomTabsStack from '../navigation/BottomTabsStack'
import { useContext } from "react";

import { FirebaseAuth } from "@/FirebaseConfig";
export default function Index() {
  const Stack=createNativeStackNavigator()
  const user=FirebaseAuth.currentUser
  // const userReg=fal;
  const {userstatus,setUserstatus}=useContext(UserContext)
  // console.log(userstatus)
  return (

   

    <Stack.Navigator screenOptions={{headerShown:false,}}>
    {
      !true?(
        <>
      <Stack.Screen name="IntroStack" component={IntroStack}></Stack.Screen>
      <Stack.Screen name="LoginStack" component={LoginStack}></Stack.Screen>
      <Stack.Screen name="RegisterStack" component={RegisterStack}></Stack.Screen>
        </>
    ):(<>
    <Stack.Screen name="BottomTabsStack" component={BottomTabsStack}></Stack.Screen>
        <Stack.Screen name="IndexStack" component={IndexStack}></Stack.Screen>
    </> )
    }
      
   
      {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
      
    </Stack.Navigator>

 
   
  );
}
