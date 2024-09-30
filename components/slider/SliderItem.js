import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
    const [entries, setEntries] = useState([
        { title: 'Entry 1' },
        { title: 'Entry 2' },
        { title: 'Entry 3' },
        // Add more entries as needed
    ]);
    
    const carouselRef = useRef(null);
    const sliderWidth = 300; // Adjust to your desired slider width
    const itemWidth = 250; // Adjust to your desired item width

    const renderItem = ({ item }) => {
        return (
            <View style={slide}>
                <Text style={title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            ref={carouselRef}
            data={entries}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'lightblue', // Adjust the background color as needed
        borderRadius: 5,
        height: 200, // Adjust the height as needed
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MyCarousel;
