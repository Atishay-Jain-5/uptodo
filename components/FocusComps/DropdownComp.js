import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import { View,Text } from 'react-native';

const DropdownComp = ({values,setdropdownSelecttion}) => {
  // const [value, setValue] = useState(null);
  // const [isFocus, setIsFocus] = useState(false);


  // const emojisWithIcons = [
  //   {title:"Day"},
  //   {title:"Week"},
  //   {title:"Month"}
  // ];
  return (
    <SelectDropdown
    data={values}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setdropdownSelecttion(selectedItem.title)
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          {selectedItem && (
            <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
          )}
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || values[0].title}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
  );
};

export default DropdownComp;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 150,
    height: 40,
    backgroundColor: '#444444',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  dropdownButtonArrowStyle: {
    fontSize: 18,
  },
  dropdownButtonIconStyle: {
    fontSize: 18,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    marginTop:-35
  },
  dropdownItemStyle: {
    
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 1,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});