import { View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import Animated from "react-native-reanimated";
import Paginator from "./Paginator";
import c1 from "../../assets/images/carousal1.png";
import c2 from "../../assets/images/carousal2.png";
import c3 from "../../assets/images/carousal3.png";
import { useNavigation } from "@react-navigation/native";
const Slider = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const scrollViewRef2 = useRef();
  const { width } = Dimensions.get("screen");
  const [index, setIndex] = useState(0);

  const images = [c1, c2, c3];
  const texts = ["Intro Text 1", "Intro Text 2", "Intro Text 3"];

  const para = [
    "You can easily manage all of your daily tasks in Do Me for free",
    "In Uptodo  you can create your personalized routine to stay productive",
    "You can organize your daily tasks by adding your tasks into separate categories",
  ];

  const handleNext = () => {
    if (index < images.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      scrollViewRef.current.scrollToIndex({ index: nextIndex, animated: true });
      scrollViewRef2.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      scrollViewRef.current.scrollToIndex({ index: prevIndex, animated: true });
      scrollViewRef2.current.scrollToIndex({
        index: prevIndex,
        animated: true,
      });
    }
  };

  return (
    <View className="flex mt-10 bg-custom-black justify-center">
      <Animated.FlatList
        data={images}
        ref={scrollViewRef}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item}
              style={{ height: 300, width: 300, marginHorizontal: 20 }}
              resizeMode="contain"
            />
          </View>
        )}
        horizontal={true}
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
      />

      <View className="mb-4 h-fit w-max pt-10">
        <Paginator data={images} currindex={index} />
      </View>
      <View className="pt-4">
        <Animated.FlatList
          data={texts}
          ref={scrollViewRef2}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 34, color: "white", paddingBottom: 0 }}>
                {item}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  textAlign: "center",
                  paddingTop: 40,
                }}
              >
                {para[index]}
              </Text>
            </View>
          )}
          horizontal={true}
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginTop: 60,
        }}
      >
        <TouchableOpacity
          className="p-4 rounded mt-4"
          onPress={handlePrev}
          disabled={index === 0}
          style={{ opacity: index === 0 ? 0.5 : 1 }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Prev</Text>
        </TouchableOpacity>

        {index === images.length - 1 ? (
          <TouchableOpacity
            className="bg-violet-800 p-4 pr-8 pl-8 rounded mt-4"
            // onPress={navigation.navigate()}
            // disabled={index >= images.length - 1}
            onPress={()=>navigation.navigate("StartScreen")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Get Started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-violet-800 p-4 pr-8 pl-8 rounded mt-4"
            onPress={handleNext}
            disabled={index >= images.length - 1}
            style={{ opacity: index >= images.length - 1 ? 0.5 : 1 }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Slider;
