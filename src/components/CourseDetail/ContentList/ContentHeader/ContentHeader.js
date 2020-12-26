import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ContentHeader = ({number, time, title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.number}>
                <Text style={styles.numberText}>{number}</Text>
            </View>
            <View style={styles.textGroup}>
                <Text style={styles.contentText}> {title} </Text>
                <Text style={styles.time}> {time} </Text>
            </View>
            <View style={styles.iconContainer} >
                <Entypo name="dots-three-vertical" size={18} color="white" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 15
    },
    number: {
        flex: 2,
        height: 50,
        backgroundColor: '#2b2b2b',
        justifyContent: 'center'
    },
    numberText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
    },
    textGroup: {
        flex: 8,
        paddingLeft: 10,
    },
    contentText: {
        color: 'white',
        fontSize: 17
    },
    time: {
        color: 'gray',
        fontSize: 13,
        marginTop: 5
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default ContentHeader;