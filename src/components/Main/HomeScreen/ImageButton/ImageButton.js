import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, ImageBackground } from "react-native";

const ImageButton = ({uri, content, textSize}) => {

    return (
        <TouchableWithoutFeedback style={styles.container}>
            <ImageBackground source={{uri: uri}} style={styles.image}>
                <Text style={[styles.text, {fontSize: textSize}]}>{content}</Text>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default ImageButton;