import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const PathItem = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../../../assets/background_1.jpg')} />
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    Big Data LDN 2020
                </Text>
                <Text style={styles.course}>
                    52 courses
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 230,
        backgroundColor: '#262525',
        marginRight: 20
    },
    image: {
        height: 100,
        width: 'auto'
    },
    textGroup: {
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    course: {
        color: 'lightgray',
        marginTop: 4,
        fontSize: 12
    }
});

export default PathItem;