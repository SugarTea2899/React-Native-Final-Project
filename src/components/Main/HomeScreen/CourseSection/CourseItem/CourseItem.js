import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

const CourseItem = ({course}) => {
    return (
        <View style={styles.container}>
            <Image source={course.image} style={styles.image} />
            <View style={styles.textGroup}>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.otherText}>{course.author}</Text>
                <Text style={styles.otherText}>{`${course.level}  -  ${course.date}  -  ${course.time}`}</Text>
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
        paddingLeft: 15,
        paddingTop: 8
    },
    title: {
        color: 'white',
        fontSize: 17
    },
    otherText: {
        color: 'lightgray',
        fontSize: 12,
        marginTop: 5
    }
});

export default CourseItem;