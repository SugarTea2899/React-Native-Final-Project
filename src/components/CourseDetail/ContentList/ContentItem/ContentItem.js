import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const ContentItem = ({ content, time, active = false, handleClick = () => {} }) => {
    let dotColor = active ? 'green' : 'gray'
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <View style={styles.container}>
                <View style={[styles.dot, { backgroundColor: dotColor }]} />
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </TouchableWithoutFeedback>

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
        marginRight: 5,
        marginBottom: 2
    },
    time: {
        flex: 1,
        color: 'gray',
        fontSize: 12,
    }
});

export default ContentItem;