import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@/screens/Index/HomeScreen';
import First from '@/screens/Intro/First';
import Second from '@/screens/Intro/Second';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DatePicker from '@/screens/Calender/Calender'
import Focus from '@/screens/Focus/Focus'
import Profile from '@/screens/Profile/Profile'
import { useContext } from 'react';
import AddTask from '@/screens/AddTask/AddTask'
import {Modal1Context} from '@/Context/Modal1Context'
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const {modalVisible, setModalVisible}=useContext(Modal1Context)
  // console.log(modalVisible)
  return (
    <Tab.Navigator 
    
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:"white",
      tabBarStyle: {
        backgroundColor: "#363636", 
        height:85,
          
      },
      tabBarLabelStyle:{
          fontSize:15
          ,marginBottom:20
      }
    }}
  >
  
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" size={25} color="#e5e5e5" />;
          },
        }}
      />
      <Tab.Screen
        name="f1"
        component={DatePicker}
        
        options={{
        tabBarLabelPosition:"below-icon",
        
          tabBarLabel: 'Calender',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="calendar-alt" size={25} color="white" />;
          },
        }}
      />
        <Tab.Screen
          name="f2"
          
          // listeners={({ navigation }) => ({
          //   tabPress: (e) => {
          //     e.preventDefault(); // Prevent default navigation
          //     setModalVisible(true); // Show the modal
          //     // setType('default'); // Set modal type to default or another as needed
          //   },
          // })}
          component={AddTask}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => {
              return (
                <AntDesign
                  name="pluscircle"
                  size={64}
                  style={{
                    bottom: 12,
                    zIndex: 999,
                    position: "absolute",
                    backgroundColor: "white",
                    borderRadius: 999,
                    borderColor: "#8687e7",
                  }}
                  color="#8687e7"
                />
              );
            },
          }}
        />
      
        <Tab.Screen
        name="f3"
        component={Focus}
        options={{
          tabBarLabel: 'Focus',
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clockcircle" size={25} color="white" />;
          },
        }}
      />
        <Tab.Screen
        name="f4"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="account-circle" size={25} color="white" />;
          },
        }}
      />

    </Tab.Navigator>
  );
}

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium">Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium">Settings!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});