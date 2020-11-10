import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';


const ListPathItem = ({path, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={path.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{path.title}</Text>
                <Text style={styles.numCourse}>{`${path.numCourse} courses`}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8
    },
    image: {
        height: 80,
        width: 120,
        alignSelf: 'center'
    },
    content: {
        marginLeft: 15,
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    numCourse: {
        color: 'gray',
        fontSize: 14
    }
});

export default ListPathItem;