import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Paginator = ({data,currindex}) => {
  // console.log(currindex)
  return (
    <View className="flex justify-center items-center  h-fit">
      <FlatList
      data={data}
      horizontal
      renderItem={({ item, index }) => (
        <View
          className="w-6 h-1 rounded bg-white mx-1"
          style={{
            opacity: index === currindex ? 1 : 0.5, 
          }}
        />
      )}
      />
    </View>
  )
}

export default Paginator