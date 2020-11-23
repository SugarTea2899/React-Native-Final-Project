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
                    <View style={{marginTop: 5}}>
                        <Text style={styles.otherText}>{course.author}</Text>
                        <Text style={styles.otherText}>{`${course.level}  -  ${course.date}  -  ${course.time}`}</Text>
                    </View>

                </View>
            </View>            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 220,
        width: 230,
        backgroundColor: '#151c2e',
        marginRight: 20,
        borderRadius: 3
    },
    image: {
        height: 110,
        width: 'auto',
        resizeMode: 'stretch',
    },
    textGroup: {
        paddingLeft: 10,
        paddingTop: 8,
        paddingRight: 10
    },
    title: {
        color: 'white',
        lineHeight: 22,
        fontSize: 16
    },
    otherText: {
        color: 'lightgray',
        fontSize: 11,
        marginTop: 2
    }
});

export default CourseItem;