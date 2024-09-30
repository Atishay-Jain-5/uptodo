import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComp from "../../components/FocusComps/DropdownComp";
// import { BarChart} from "react-native-gifted-charts";
import Barchart from "../../components/FocusComps/Barchart";
import FocusCards from "../../components/FocusComps/FocusCards"
import Insta from '../../SVG/Inta'
// import { ProgressCircle } from 'react-native-svg-charts'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
const Focus = () => {
  const data = [
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
    { value: 50 },
    { value: 80 },
    { value: 90 },
    { value: 70 },
  ];
  const obj_cards=[
    {"img":"https://img.icons8.com/color/48/instagram-new--v1.png",
      "appName":"Instagram",
      "time":4
    },
    {"img":"https://img.icons8.com/color/48/instagram-new--v1.png",
      "appName":"Instagram",
      "time":4
    },
    {"img":"https://img.icons8.com/color/48/instagram-new--v1.png",
      "appName":"Instagram",
      "time":4
    },
    {"img":"https://img.icons8.com/color/48/instagram-new--v1.png",
      "appName":"Instagram",
      "time":4
    },
    {"img":"https://img.icons8.com/color/48/instagram-new--v1.png",
      "appName":"Instagram",
      "time":4
    }
  ]
  const [sec, setSec] = useState(0);
  const [progress,setprogress]=useState(1);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSec((prevSec) => {
  //       const newsec = prevSec + 1;
  //       if (newsec <= 60) {  
  //         const newProgress = Math.min(newsec / 60, 1);
  //         setprogress(newProgress); 
  //       }
  //       // console.log(newsec / 60); 
  //       return newsec;
  //     });
  //   }, 1000);
  
  //   // return () => clearInterval(interval);
  // }, []);
  const values=[
    {title:"Day"},
    {title:"Week"},
    {title:"Month"}
  ]

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.hcontainer}>
          <Text style={styles.heading}>Focus Mode</Text>
        </View>
        {/* <View style={{ marginTop: 220, position: "absolute", zIndex: 999 }}>
          <Text style={styles.heading}>
            {" "}
            {Math.floor(sec / 3600)}:{Math.floor((sec % 3600) / 60)}
          </Text>
        </View> */}
        <View style={{ marginVertical: 20, height: 200 }}>
        <CountdownCircleTimer
    isPlaying
    duration={3600}
    colors={['#8875ff', '#8875ff', '#8875ff', '#8875ff']}
    colorsTime={[7, 5, 2, 0]}
    
  >
    {({ remainingTime }) => <Text style={styles.sub1}>{Math.round(remainingTime/60)} Minutes</Text>}
  </CountdownCircleTimer>
          {/* <ProgressCircle 
            style={{ height: 200 }} 
            progress={progress} 
            progressColor={'rgb(134, 65, 244)'} 
            strokeWidth={10} 
          /> */}
        {/* </View> */}
          {/* <CircularProgress
            value={sec}
            radius={120}
            duration={86400}
            progressValueColor={"#ecf0f1"}
            maxValue={86400}
            showProgressValue={false}
            titleColor={"white"}
            titleStyle={{ fontWeight: "bold" }}
          /> */}
          {/* <ProgressCircle style={{zIndex:999, height: 200 }} progress={progress} progressColor={'rgb(134, 65, 244)'} /> */}
        </View>
        <Text style={styles.sub1}>
          While your focus mode is on, all of your notifications will be off
        </Text>
        <View>
          <TouchableOpacity style={styles.opac}>
            <Text style={styles.sub11}>Start Focusing</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            marginTop: "10%",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <Text style={styles.sub1}>Overview</Text>
          <DropdownComp values={values}></DropdownComp>
        </View>
        <View style={{ flex: 1,  }}>
          {/* <BarChart backgroundColor={"white"} data = {data}   /> */}
          <Barchart></Barchart>
        </View>
        <View style={{flex:1,width:"100%",alignItems:"flex-start"}}>
          <Text style={styles.sub1}>Applications</Text>
        </View>
        <View style={{padding:10,marginBottom:30,display:"flex",gap:15}}>
          {obj_cards.map((i)=>(

            <FocusCards data={i}></FocusCards>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Focus;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#121212",
  },
  heading: {
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
  hcontainer: {
    marginTop: 70,
  },
  sub1: {
    padding: 10,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  opac: {
    marginTop: 20,
    alignItems: "center",
    width: "auto",
    padding: 20,
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: "#8875ff",
  },
});
