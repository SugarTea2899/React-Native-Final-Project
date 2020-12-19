import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const EmptyContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{'You cannot see this content\nPlease login and register this course'}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    text: {
        paddingLeft: 5,
        paddingRight: 5,
        color: 'lightgray',
        fontSize: 15,
        textAlign: 'center'
    }
});

export default EmptyContent;