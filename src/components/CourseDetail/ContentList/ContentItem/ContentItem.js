import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const ContentItem = ({content, time}) => {
    return (
        <View style={styles.container}>
            <View style={styles.dot} />
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 10
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'gray'
    },
    content: {
        color: 'white',
        flex: 7,
        fontSize: 13,
        marginLeft: 12,
        marginBottom: 2
    },
    time: {
        flex: 1,
        color: 'gray',
        fontSize: 12,
    }
});

export default ContentItem;