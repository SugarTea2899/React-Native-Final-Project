import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconButton = ({name, content}) => {
    return (
        <View style={styles.content}>
            <View style={styles.iconContainer}>
                <Feather name={name} size={25} color="white" />
            </View> 
            <Text style={styles.text}>{content}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    content:{
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#47484a',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        marginTop: 4,
        fontWeight: 'bold'
    }
});

export default IconButton;