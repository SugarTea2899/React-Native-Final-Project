import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { COURSE_DETAIL } from '../../../../../globals/keyScreen';

const CourseItem = ({course, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(COURSE_DETAIL, {course: course})}>
            <View style={styles.container}>
                <Image source={course.image} style={styles.image} />
                <View style={styles.textGroup}>
                    <Text style={styles.title}>{course.title}</Text>
                    <Text style={styles.otherText}>{course.author}</Text>
                    <Text style={styles.otherText}>{`${course.level}  -  ${course.date}  -  ${course.time}`}</Text>
                </View>
            </View>            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 230,
        backgroundColor: '#151c2e',
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