import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const IconButton = ({ name, content, onClick }) => {
    return (
        <View style={styles.content}>
            <TouchableHighlight onPress={onClick}>
                <View style={styles.iconContainer}>
                    <AntDesign name={name} size={20} color="white" />
                </View>
            </TouchableHighlight>

            <Text style={styles.text}>{content}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    content: {
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