import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Feather from '@expo/vector-icons/Feather';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import CheveronButton from '@/components/ProfileComp/CheveronButton'
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const CheveronButton = ({ icon }) => {
  const icons = {
    logout: (
      <SimpleLineIcons
        name="logout"
        size={30}
        style={{ marginLeft: 3 }}
        color="red"
      />
    ),
    "Support Us": (
      <FontAwesome
        name="thumbs-up"
        size={30}
        style={{ marginLeft: 3 }}
        color="white"
      />
    ),
    "Help and FeedBack": (
      <MaterialCommunityIcons
        name="lightning-bolt"
        size={30}
        color="white"
        style={{ marginLeft: 3 }}
      />
    ),
    FAQ: (
      <AntDesign
        name="exclamationcircleo"
        style={{ marginLeft: 3 }}
        size={30}
        color="white"
      />
    ),
    "About Us": (
      <Ionicons
        name="person-circle"
        size={30}
        style={{ marginLeft: 3 }}
        color="white"
      />
    ),
    "Change Account Image": (
      <FontAwesome5
        name="camera-retro"
        size={30}
        style={{ marginLeft: 3 }}
        color="white"
      />
    ),
    "Change Account Password": (
      <Entypo name="key" size={30} style={{ marginLeft: 3 }} color="white" />
    ),
    "Change Account Name": (
      <Ionicons
        name="person-circle"
        size={30}
        style={{ marginLeft: 3 }}
        color="white"
      />
    ),
    "App Settings": (
      <MaterialCommunityIcons
        name="cog-outline"
        size={30}
        style={{ marginLeft: 3 }}
        color="white"
      />
    ),
    "Change app color": (
      <FontAwesome name="paint-brush" size={30} color="white" />
    ),
    "Change app typography": <Feather name="type" size={30} color="white" />,
    "Change app language": <Ionicons name="language" size={30} color="white" />,
    "Import from Google calendar": (
      <Ionicons name="download" size={30} color="white" />
    ),
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 3,
        gap: 10,
      }}
    >
      {icons[icon]}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Text style={styles.sub11}>{icon}</Text>
        <Feather name="chevron-right" size={24} color="white" />
      </View>
    </View>
  );
};

export default CheveronButton;

const styles = StyleSheet.create({
  sub11: {
    padding: 10,
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
