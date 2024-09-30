import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart } from 'react-native-gifted-charts';

const Barchart = () => {
  const labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date();
  const index = date.getDay();
  const data = [
    { value: 2.5 },
    { value: 3.5 },
    { value: 5 },
    { value: 4 },
    { value: 4 },
    { value: 4.5 },
    { value: 2 }
  ];

  return (
    <View style={{ flex: 1, marginBottom: 20, backgroundColor: "black" }}>
      <BarChart
        data={data}
        xAxisLabelTexts={labels}
        yAxisLabelSuffix="h"
        backgroundColor="#121212"
        hideRules={true}
        maxValue={7}
        yAxisOffset={0}
        xAxisLabelTextStyle={{ color: 'white' }} 
        yAxisTextStyle={{ color: 'white' }}  
        barBorderRadius={4}
        xAxisColor={"black"}
        frontColor={"#a5a5a5"}
        showXAxisIndices={false}
        yAxisLabelContainerStyle={{ backgroundColor: "black" }}
        yAxisIndicesColor={"white"} 
        xAxisColor={"black"}  
        focusBarOnPress={true}
        focusedBarIndex={index}
        focusedBarConfig={{ color: "#8875ff" }}
      />
    </View>
  );
};

export default Barchart;

const styles = StyleSheet.create({});
