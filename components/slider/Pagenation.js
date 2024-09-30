import { Text, StyleSheet, View, Animated, Dimensions } from 'react-native';
import React from 'react';

export default class Pagination extends React.Component {
  render() {
    const { data, scrollx } = this.props;
    const width = Dimensions.get('screen').width;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', flexDirection: 'row', width: '100%' }}>
        {data.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const dotWidth = scrollx.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                { width: dotWidth },
              ]}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dot: {
    height: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 2,
  },
});
