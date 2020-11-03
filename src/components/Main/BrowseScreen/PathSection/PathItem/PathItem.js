import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const PathItem = ({path}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={path.image} />
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {path.title}
                </Text>
                <Text style={styles.course}>
                    {`${path.numCourse} courses`}
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