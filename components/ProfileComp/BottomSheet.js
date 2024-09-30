import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetText from '../ProfileComp/BottomSheetText'
const BottomSheet1 = React.forwardRef((props, ref) => {


  return (
    <View style={{flex: 1}}>
      {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      /> */}
      <RBSheet
        ref={ref}
        useNativeDriver={false} 
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
      <BottomSheetText></BottomSheetText>
      </RBSheet>
    </View>
  );
})

export default BottomSheet1;