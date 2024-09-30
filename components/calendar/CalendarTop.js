import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Agenda } from 'react-native-calendars';
const CalendarTop = () => {
    const months = [
        { "January": { number: 1, days: 31 } },
        { "February": { number: 2, days: 28 } },  
        { "March": { number: 3, days: 31 } },
        { "April": { number: 4, days: 30 } },
        { "May": { number: 5, days: 31 } },
        { "June": { number: 6, days: 30 } },
        { "July": { number: 7, days: 31 } },
        { "August": { number: 8, days: 31 } },
        { "September": { number: 9, days: 30 } },
        { "October": { number: 10, days: 31 } },
        { "November": { number: 11, days: 30 } },
        { "December": { number: 12, days: 31 } }
      ];
      const date=new Date();
      const day=date.getDay();
      const month=date.getMonth();
  return (
    <View>
     {/* <Agenda></Agenda> */}
    </View>
  )
}

export default CalendarTop

const styles = StyleSheet.create({})