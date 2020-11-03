import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import CourseItem from './CourseItem/CourseItem';

const course = {
    title: 'React',
    author: 'Simon Allardice',
    level: 'Beginer',
    date: 'Oct 2020',
    time: '2h 8m',
    image: require('../../../../../assets/background_1.jpg')
}

const CourseSection = ({title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.seeALL}>
                    {'See all >'}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                <CourseItem course={course} />
                <CourseItem course={course} />
                <CourseItem course={course} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 50
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    textGroup: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeALL:{
        color: 'ghostwhite',
        fontStyle: 'italic',
        paddingRight: 10,
        paddingTop: 5
    }
});

export default CourseSection;
