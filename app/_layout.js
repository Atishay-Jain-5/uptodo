import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "expo-router";
import BottomTab from "../components/bottomTab/BottomTab";
import UserContextProvider from "../Context/UserContext";
// import TasksContext from "../Context/TasksContext";
import TasksContextProvider from "../Context/TasksContext";
import CategoryContextProvider from "../Context/CategoryContext";
export default function RootLayout() {
  return (
    // <NavigationContainer>
    <UserContextProvider>
      <CategoryContextProvider>

      <TasksContextProvider>

    <Stack screenOptions={{headerShown:false,}}  >
      <Stack.Screen name="index" />
      {/* <BottomTab></BottomTab> */}
    </Stack>
      </TasksContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
    // </NavigationContainer>
  );
}
