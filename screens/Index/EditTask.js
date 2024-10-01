import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { EditTaskContext } from "@/Context/EditTaskContext";
import { TasksContext } from "@/Context/TasksContext";
import HandD from "@/components/EditPage/HandD";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState, useEffect } from "react";
import { cloneElement } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Modal } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ModalCreateCat from "@/components/CreateTask/ModalCreateCat";
import ModalCategory from "@/components/CreateTask/ModalCategory";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import EditTandD from "../../components/EditPage/EditTAndD";
import ModalPriority from "@/components/CreateTask/ModalPriority";
import DeleteTask from '../../components/EditPage/DeleteTask'
const EditTask = ({ navigation }) => {
  const { taskIndex, setTaskIndex } = useContext(EditTaskContext);
  const { userTasks, setuserTasks } = useContext(TasksContext);
  const [dateobj, setDateObj] = useState(userTasks[taskIndex]?.date);
  const datepart = dateobj?.toISOString()?.split("T")[0] || " ";
  const timePart = dateobj?.toISOString()?.split("T")[1]?.split(".")[0] || " ";
  const localDate = dateobj?.toLocaleDateString();
  const localTime = dateobj?.toLocaleTimeString();
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [ModalCategoryVisi, setModalCategoryVisi] = useState(false);
  const [CreateCatVisi, setCreateCatVisi] = useState(false);
  const [priorityVisi, setpriorityVisi] = useState(false);
  const [deleteTask,setDeleteTask] = useState(false)
  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      // setuserTasks(prevTasks => {
      //   if (prevTasks.length > 0) {
      //     const updatedTasks = [...prevTasks];
      //     updatedTasks[updatedTasks.length - 1].date = "";
      //     return updatedTasks;
      //   }
      //   return prevTasks;
      // });
      return;
    }

    const currentDate = selectedDate || date;
    setDateObj(currentDate);
    // console.log(currentDate)
    setDate(currentDate);
    const updatedTasks = [...userTasks];
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      date: currentDate,
    };

    // Set the updated array to the state
    setuserTasks(updatedTasks);

    // setuserTasks(prevTasks => {
    //   if (prevTasks.length > 0) {
    //     const updatedTasks = [...prevTasks];
    //     updatedTasks[updatedTasks.length - 1].date = currentDate;
    //     return updatedTasks;
    //   }
    //   return prevTasks;
    // });

    if (!showTime) {
      setShowTime(true);
    }
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  // useEffect(()=>{
  //   if(type==='date'){
  //     showDatepicker()
  //   }

  // },[type])
  useEffect(() => {
    if (showTime) {
      showTimepicker();
      setShowTime(false);
      // settype('default')
    }
  }, [showTime]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.iconContain}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="closesquare" size={30} color="white" />
          </TouchableOpacity>
          <SimpleLineIcons name="loop" size={30} color="white" />
        </View>
        <View style={styles.handDContainer}>
          <HandD obj={userTasks[taskIndex]}></HandD>
        </View>
        <View style={styles.allButton}>
          <View style={styles.timeContainer}>
            <View style={styles.taskTime}>
              <AntDesign name="clockcircle" size={24} color="white" />
              <Text style={styles.heading}>Task Time :</Text>
            </View>
            <TouchableOpacity onPress={() => showDatepicker()}>
              <View style={styles.taskTimeInfo}>
                <Text style={styles.sub11}>
                  {dateobj?.toLocaleDateString()} At{" "}
                  {dateobj?.toLocaleTimeString()?.slice(0, 5)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.taskTime}>
              <FontAwesome name="tag" size={24} color="white" />
              <Text style={styles.heading}>Task Category :</Text>
            </View>
            <TouchableOpacity onPress={() => setModalCategoryVisi(true)}>
              <View style={styles.taskTimeInfo}>
                {userTasks[taskIndex]?.icon &&
                  cloneElement(userTasks[taskIndex]?.icon, { size: 13 })}
                <Text style={styles.sub11}>
                  {userTasks[taskIndex].category}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.taskTime}>
              <FontAwesome6 name="font-awesome-flag" size={24} color="white" />
              <Text style={styles.heading}>Task Priority :</Text>
            </View>
            <TouchableOpacity onPress={() => setpriorityVisi(true)}>
              <View style={styles.taskTimeInfo}>
                <Text style={styles.sub11}>
                  {userTasks[taskIndex].Priority}
                </Text>
                <FontAwesome6
                  name="font-awesome-flag"
                  size={12}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.taskTime}>
              <Entypo name="flow-tree" size={24} color="white" />
              <Text style={styles.heading}>Sub - Task</Text>
            </View>
            <View style={styles.taskTimeInfo}>
              <Text style={styles.sub11}>Add</Text>
            </View>
          </View>
            <TouchableOpacity onPress={()=>setDeleteTask(true)}>
          <View style={[styles.timeContainer, { marginLeft: 3 }]}>

            <View style={styles.taskTime}>
              <FontAwesome name="trash" size={24} color="red" />
              <Text style={styles.headingdel}>Delete Task</Text>
            </View>
            
          </View>
            </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            // statusBarTranslucent={false}
            visible={ModalCategoryVisi}
            presentationStyle="fullScreen"
            onRequestClose={() => setModalCategoryVisi(false)}
          >
            <TouchableWithoutFeedback
              onPress={() => setModalCategoryVisi(false)}
            >
              <View style={styles.topView}>
                <View style={styles.modalView}>
                  <ModalCategory
                    modalVisible3={ModalCategoryVisi}
                    setModalVisible3={setModalCategoryVisi}
                    modalVisible4={CreateCatVisi}
                    setModalVisible4={setCreateCatVisi}
                    flag={true}
                  ></ModalCategory>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            animationType="slide"
            // transparent={true}
            statusBarTranslucent={true}
            visible={CreateCatVisi}
            presentationStyle="fullScreen"
            onRequestClose={() => setCreateCatVisi(false)}
          >
            <TouchableWithoutFeedback onPress={() => setCreateCatVisi(false)}>
              <View style={styles.topView}>
                <View style={styles.modalView}>
                  <ModalCreateCat
                    setModalVisible4={setCreateCatVisi}
                  ></ModalCreateCat>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            statusBarTranslucent={false}
            visible={priorityVisi}
           presentationStyle="fullScreen"
            onRequestClose={() => setpriorityVisi(false)}
          >
            <TouchableWithoutFeedback onPress={() => setpriorityVisi(false)}>
              <View style={styles.topView}>
                <View style={styles.modalView}>
                  <ModalPriority
                    modalVisible2={priorityVisi}
                    setModalVisible2={setpriorityVisi}
                    flag={true}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            // statusBarTranslucent={false}
            visible={deleteTask}
           presentationStyle="overFullScreen"
            onRequestClose={() => setDeleteTask(false)}
          >
            <TouchableWithoutFeedback onPress={() => setDeleteTask(false)}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                 <DeleteTask setDeleteTask={setDeleteTask}></DeleteTask>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default EditTask;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#121212",
    gap: 18,
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  iconContain: {
    paddingTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
    flexDirection: "row",
  },
  handDContainer: {
    alignItems: "flex-start",
    width: "98%",
    marginTop: 20,
  },
  allButton: {
    flexDirection: "column",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  taskTime: {
    flexDirection: "row",
    gap: 10,
    width: "60%",
    alignItems: "center",
  },
  taskTimeInfo: {
    backgroundColor: "#444444",
    padding: 10,
    borderRadius: 5,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sub11: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    // gap:20
  },
  topView: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22,
    height: "100%",
  },
  centeredView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    height: "85%",
    // opacity:0.7
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#121212",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  headingdel: {
    color: "red",
    fontSize: 22,
    textAlign: "center",
  },
});
