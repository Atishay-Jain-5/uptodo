import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "expo-router";
import BottomTab from "../components/bottomTab/BottomTab";
import UserContextProvider from "../Context/UserContext";
// import TasksContext from "../Context/TasksContext";
import TasksContextProvider from "../Context/TasksContext";
import CategoryContextProvider from "../Context/CategoryContext";
import Modal1ContextProvider from "../Context/Modal1Context";
import EditTaskContextProvider from "../Context/EditTaskContext";
export default function RootLayout() {
  return (
    // <NavigationContainer>

    <Modal1ContextProvider>

    <UserContextProvider>
      <CategoryContextProvider>
<EditTaskContextProvider>

      <TasksContextProvider>

    <Stack screenOptions={{headerShown:false,}}  >
      <Stack.Screen name="index" />
      {/* <BottomTab></BottomTab> */}
    </Stack>
      </TasksContextProvider>
</EditTaskContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
    </Modal1ContextProvider>
    // </NavigationContainer>
  );
}
