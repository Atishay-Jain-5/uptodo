import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
    // onIconPress={}
      placeholder="Search For Your Tasks"
      placeholderTextColor={"#afafaf"}
      onChangeText={setSearchQuery}
      value={searchQuery}
      
      style={{backgroundColor:"#1d1d1d",color:"#afafaf",borderRadius:5,width:"95%"}}
    />
  );
};

export default MyComponent;
