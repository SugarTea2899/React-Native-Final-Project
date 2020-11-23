import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';

import CourseItem from './CourseItem/CourseItem';

const courses = [
    {
        id: '1',
        title: 'React For Beginer',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../../../assets/courses/course_01.png')
    },
    {
        id: '2',
        title: 'React Hook',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../../../assets/courses/course_05.png')
    },
    {
        id: '3',
        title: 'Building Application With React and Redux',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '10h 8m',
        image: require('../../../../../assets/courses/course_04.png')
    },
    {
        id: '4',
        title: 'Building Application With React and Flux',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '8h 8m',
        image: require('../../../../../assets/courses/course_07.png')
    },
    {
        id: '5',
        title: 'React Native For Beginer',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '17h 8m',
        image: require('../../../../../assets/courses/course_06.jpg')
    },
    {
        id: '6',
        title: 'React with Material UI',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Nov 2020',
        time: '2h 10m',
        image: require('../../../../../assets/courses/course_02.jpg')
    },
    {
        id: '7',
        title: 'Building React Native Applications Using Expo',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../../../assets/courses/course_03.png')
    },
    {
        id: '8',
        title: 'Managing React State',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../../../assets/courses/course_08.png')
    },
    {
        id: '9',
        title: 'Realtime with React',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../../../assets/courses/course_01.png')
    },
    {
        id: '10',
        title: 'Ant Design',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../../../assets/courses/course_09.jpeg')
    }
]

const course = {
    id: '1',
    title: 'React',
    author: 'Simon Allardice',
    level: 'Beginer',
    date: 'Oct 2020',
    time: '2h 8m',
    image: require('../../../../../assets/background_1.jpg')
}

const CourseSection = ({title, style, navigation, handleSeeAll}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <TouchableWithoutFeedback onPress={handleSeeAll}>
                    <Text style={styles.seeALL}>
                        {'See all >'}
                    </Text>
                </TouchableWithoutFeedback>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    courses.map((item, index) => {
                        return index < 4 ? <CourseItem navigation={navigation} course={item} /> : <Text style={styles.emptyText}> </Text>
                    })
                }
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
    },
    emptyText: {
        width: 0,
        height: 0
    }
});

export default CourseSection;
