import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { TasksContext } from '@/Context/TasksContext';
import { EditTaskContext } from '@/Context/EditTaskContext';
const MyComponent = () => {
  const {   taskIndex, setTaskIndex}=React.useContext(EditTaskContext)
  const {  userTasks,setuserTasks}=React.useContext(TasksContext)
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchTask =()=>{
    const tempTasks = [...userTasks];
  
   
    const lastTask = tempTasks.pop();
  }
  return (
    <Searchbar
    // onIconPress={}
      placeholder="Search For Your Tasks"
      placeholderTextColor={"#afafaf"}
      onChangeText={setSearchQuery}
      value={searchQuery}
      iconColor='white'
      onIconPress={()=>searchTask()}
      style={{backgroundColor:"#1d1d1d",color:"#afafaf",borderRadius:5,width:"95%"}}
    />
  );
};

export default MyComponent;
