import React, { createContext, useContext, useState } from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
export const CategoryContext = createContext();
const CategoryContextProvider = ({ children }) => {
    const default_opt=[
        {
          icon: (
            <MaterialIcons name="local-grocery-store" size={30} color="black" />
          ),
          title: "Grocery",
        },
        {
          icon: <MaterialIcons name="work" size={30} color="black" />,
          title: "Work",
        },
        {
          icon: <FontAwesome6 name="dumbbell" size={30} color="black" />,
          title: "Sport",
        },
        {
          icon: <MaterialIcons name="design-services" size={30} color="black" />,
          title: "Design",
        },
        {
          icon: <FontAwesome6 name="graduation-cap" size={30} color="black" />,
          title: "Graduation",
        },
        {
          icon: <Ionicons name="megaphone" size={30} color="black" />,
          title: "Social",
        },
        {
          icon: <FontAwesome5 name="music" size={30} color="black" />,
          title: "Music",
        },
        {
          icon: <FontAwesome name="heartbeat" size={30} color="black" />,
          title: "Health",
        },
        {
          icon:<MaterialIcons name="video-camera-back" size={30} color="black" />,
          title: "Movie",
        },
        {
          icon: <Entypo name="home" size={30} color="black" />,
          title: "Home",
        },
        {
          icon: <Entypo name="plus" size={30} color="black" />,
          title: "Add",
        },
      ]
    const [categories,setcategories]=useState(default_opt)

    return (
<CategoryContext.Provider value={{
               categories,setcategories
			}}
		>
			{children}
		</CategoryContext.Provider>
    );
}
export default CategoryContextProvider;