import { View, Image, Button,Pressable,Text } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
// import { useExpoRouter } from 'expo-router/build/global-state/router-store';
import { useRouter } from 'expo-router';
const First = ({ navigation }) => {
    const router=useRouter()
    // const redirect = ()=>{
    //     router.push('/components/Intro/Second')
    // }
  return (
    <View className="flex-1 justify-center items-center bg-custom-black">
      <Image
        source={require('../../assets/images/first.png')}
        className="h-2/4 w-40"
        resizeMode="contain" ></Image>
          <Pressable className="bg-violet-800 p-4 rounded mt-4" onPress={()=>navigation.navigate("Second")}>
        <Text className="text-white text-center">Begin</Text>
      </Pressable>
    </View>
  );
};

export default First;
