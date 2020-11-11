import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const MyButton = ({style, text, handleClick}) => {
    return (
        <TouchableOpacity onPress={handleClick} style={[style, styles.container]}>
            <View style={{flex: 1}}>
                <Text style={styles.text}>
                   {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 8,
        paddingTop: 8
    },
    container: {
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    }
});

export default MyButton;