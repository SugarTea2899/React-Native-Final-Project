import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import CourseItem from './CourseItem/CourseItem';

const course = {
    id: '1',
    title: 'React',
    author: 'Simon Allardice',
    level: 'Beginer',
    date: 'Oct 2020',
    time: '2h 8m',
    image: require('../../../../../assets/background_1.jpg')
}

const CourseSection = ({title, style, navigation}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.seeALL}>
                    {'See all >'}
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <CourseItem navigation={navigation} course={course} />
                <CourseItem navigation={navigation} course={course} />
                <CourseItem navigation={navigation} course={course} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
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
