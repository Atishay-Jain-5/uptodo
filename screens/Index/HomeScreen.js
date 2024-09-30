import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/IndexPageComp/Header";
import BottomTab from "../../components/bottomTab/BottomTab";
import { useContext } from "react";
import { TasksContext } from "@/Context/TasksContext";
import SearchBar from "../../components/IndexPageComp/SearchBar";
import IndexPageTaskCont from "../../components/IndexPageComp/IndexPageTaskCont";
import DropdownComp from "@/components/FocusComps/DropdownComp";
import { TouchableOpacity } from "react-native-gesture-handler";
const HomeScreen = ({navigation}) => {
  const { userTasks, setuserTasks } = useContext(TasksContext);
  // console.log(userTasks)
  const [completed,setCompleted]=useState([]);
  const [notcompleted,setnotcompleted]=useState([]);
  // let changes=0;

  const [dropdownSelecttion,setdropdownSelecttion]=useState("Completed")
  useEffect(() => {
    const completedTasks = userTasks.slice(0, userTasks.length - 1).filter(i => i?.completed === true);
    setCompleted(completedTasks);
    const notcompletedTasks = userTasks.slice(0, userTasks.length - 1).filter(i => i?.completed === false);
    setnotcompleted(notcompletedTasks)
  }, [dropdownSelecttion]);
  // useEffect(() => {
  //   const completedTasks = userTasks.slice(0, userTasks.length - 1).filter(i => i?.completed === true);
  //   setCompleted(completedTasks);
  //   const notcompletedTasks = userTasks.slice(0, userTasks.length - 1).filter(i => i?.completed === false);
  //   setnotcompleted(notcompletedTasks)
  // }, []);
  // console.log(completed)
  //  userTasks.map((i)=>{console.log(i)})
  const valuesCompleted = [{ title: "Completed" },{"title":"Not Completed"}];
  const values = [
    { title: "Today" },
    { title: "Tommorow" },
    { title: "Next Week" },
  ];
  return (
    // <ScrollView style={}>

   
    <View style={styles.main}>
      <Header />

      {userTasks.length > 1 ? (
        <ScrollView style={{  gap: 20 }}>
          <SearchBar></SearchBar>
          <View
            style={{
              alignItems: "flex-start",
              width: "100%",
              paddingHorizontal: 20,
              gap: 10,
              marginTop:20
            }}
          >
            <DropdownComp values={values}></DropdownComp>
            {/* <Text style={styles.heading}>Your Tasks</Text> */}
            <FlatList
              data={userTasks}
              scrollEnabled={true}
              // style={{width:"100%"}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginVertical: 10,
                  }}
                >
                  <IndexPageTaskCont obj={item} ></IndexPageTaskCont>
                </View>
              )}
            />
            <DropdownComp values={valuesCompleted} setdropdownSelecttion={setdropdownSelecttion}></DropdownComp>
            <FlatList
            scrollEnabled={true}
            // style={{width:"100%"}}
              data={dropdownSelecttion==='Completed'?completed:notcompleted}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginVertical: 10,
                  }}
                >
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate("EditTask")
                  }}>

                  <IndexPageTaskCont obj={item}></IndexPageTaskCont>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.imageCon}>
          <Image
            source={require("../../assets/images//index.png")}
            className="h-2/4 w-2/4"
            resizeMode="contain"
          />
          <Text style={styles.heading}>What do you want to do today?</Text>
          <Text style={styles.sub1}>Tap + to add your tasks</Text>
        </View>
      )}
    </View>
    // </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#121212",
    // gap:8
  },
  imageCon: {
    gap: 8,
    marginTop: "25%",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  sub1: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
});
