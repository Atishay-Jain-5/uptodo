import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '../../components/slider/Slider'
import { Dimensions } from 'react-native'
import Paginator from '../../components/slider/Paginator'
import { useRef } from 'react'
import { Image } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import Pagination from '../../components/slider/Pagenation'
import c1 from '../../assets/images/carousal1.png'
import c2 from '../../assets/images/carousal2.png'
import c3 from '../../assets/images/carousal3.png'
const Second = ({navigation}) => {
  const sliderRef = useRef(null); 
  const [index1,setIndex]=useState(0)
  const { width } = Dimensions.get('screen'); 
  // useEffect(()=>{
  //  if(xval>=width-1){
  //   console.log("here")
  //  }
  // },[xval])
  const images = [
    c1,c2,c3
  ];

  const handleNext = () => {
    if (sliderRef.current) {
     
      sliderRef.current.scrollToNext();
    }
  };
  return (
    <View className="flex-1 h-max bg-custom-black">
      <TouchableOpacity onPress={()=>navigation.navigate("LoginStack", { screen: "LoginMain" })}>

      <Text className="pt-14 pl-5 text-xl text-slate-500">Skip</Text>
      </TouchableOpacity>
      <Slider></Slider>
      {/* <Carousel
        ref={sliderRef}
        pagingEnabled
        loop
        width={width}
        height={width * 0.6} 
        
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) =>{setIndex(index)}}
        renderItem={({ index }) => (
          <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={images[index]}
              style={{ height: '100%', width: '100%', borderRadius: 10 }}
              resizeMode="contain" 
            />
          </View>
        )}
      /> */}
      {/* <Pagination data={images} scroll></Pagination> */}
      {/* <Button title='Next' onPress={handleNext} /> */}
    </View>
  );
};

export default Second;