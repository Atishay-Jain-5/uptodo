import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import HorizontalDatePicker from "@logisticinfotech/react-native-horizontal-date-picker"
import { color } from 'react-native-elements/dist/helpers';
const CalendarTop = ({setDate}) => {
    // const months = [
    //     { "January": { number: 1, days: 31 } },
    //     { "February": { number: 2, days: 28 } },  
    //     { "March": { number: 3, days: 31 } },
    //     { "April": { number: 4, days: 30 } },
    //     { "May": { number: 5, days: 31 } },
    //     { "June": { number: 6, days: 30 } },
    //     { "July": { number: 7, days: 31 } },
    //     { "August": { number: 8, days: 31 } },
    //     { "September": { number: 9, days: 30 } },
    //     { "October": { number: 10, days: 31 } },
    //     { "November": { number: 11, days: 30 } },
    //     { "December": { number: 12, days: 31 } }
    //   ];
      // const date=new Date();
    //   const day=date.getDay();
    //   const month=date.getMonth();
      onDateSelected = date => {
        const date2Parts = date.split('-');
const date2 = new Date(`${date2Parts[2]}-${date2Parts[1]}-${date2Parts[0]}`);
       setDate(date2.toLocaleDateString())
      }
      // const getCurrentDateOnly = () => {
      //   const today = new Date();
      //   return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      // };
      // console.log(getCurrentDateOnly)
  return (
    <View>
    <HorizontalDatePicker
	pickerType={"date"}
  // maxDate={3}
  // datePickerBG={{backgroundColor:"#363636"}}
  datePickerContainerStyle={{backgroundColor:"#363636",color:"#363636"}}
	onDateSelected={this.onDateSelected}
  minDate={new Date()}
  yearContainerStyle={{backgroundColor:"#363636",color:"white",marginBottom:-5}}
  yearTextStyle={{color:"white",fontSize:22}}
  selectedTextStyle={{color:"white"}}
  
	/>
    </View>
  )
}

export default CalendarTop

const styles = StyleSheet.create({})