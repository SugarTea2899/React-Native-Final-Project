import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, ImageBackground, TouchableOpacity } from "react-native";

const ImageButton = ({image, content, textSize, height, style, handleClick, value}) => {

    return (
        <TouchableOpacity onPress={() => {handleClick(value)}}>
            <ImageBackground source={image} style={[styles.image, {height: height}, style]}>
                <Text style={[styles.text, {fontSize: textSize}]}>{content}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default ImageButton;