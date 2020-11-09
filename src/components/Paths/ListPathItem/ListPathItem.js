import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';


const ListPathItem = ({path}) => {
    return (
        <View style={styles.container}>
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
        height: 80,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8
    },
    image: {
        height: 50,
        width: 80,
        alignSelf: 'center'
    },
    content: {
        marginLeft: 15,
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 15
    },
    numCourse: {
        color: 'gray',
        fontSize: 12
    }
});

export default ListPathItem;