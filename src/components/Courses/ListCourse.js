import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from './ListCourseItem/ListCourseItem';

const courses = [
    {
        id: '1',
        title: 'React For Beginer',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/courses/course_01.png')
    },
    {
        id: '2',
        title: 'React Hook',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/courses/course_05.png')
    },
    {
        id: '3',
        title: 'Building Application With React and Redux',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '10h 8m',
        image: require('../../../assets/courses/course_04.png')
    },
    {
        id: '4',
        title: 'Building Application With React and Flux',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '8h 8m',
        image: require('../../../assets/courses/course_07.png')
    },
    {
        id: '5',
        title: 'React Native For Beginer',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '17h 8m',
        image: require('../../../assets/courses/course_06.jpg')
    },
    {
        id: '6',
        title: 'React with Material UI',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Nov 2020',
        time: '2h 10m',
        image: require('../../../assets/courses/course_02.jpg')
    },
    {
        id: '7',
        title: 'Building React Native Applications Using Expo',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../assets/courses/course_03.png')
    },
    {
        id: '8',
        title: 'Managing React State',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../assets/courses/course_08.png')
    },
    {
        id: '9',
        title: 'Realtime with React',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../assets/courses/course_01.png')
    },
    {
        id: '10',
        title: 'Ant Design',
        author: 'Simon Allardice',
        level: 'Intermediate',
        date: 'Oct 2020',
        time: '1h 8m',
        image: require('../../../assets/courses/course_09.jpeg')
    }
]


const ListCourse = ({style, header, hideTotal, navigation}) => {
    return (
        <View style={[styles.container, style]}>
            {!hideTotal && <Text style={styles.total}>{`${courses.length} Results`}</Text>}
            
            <FlatList
                data={courses}
                renderItem={({item}) => <ListCourseItem navigation={navigation} course={item}/>}
                keyExtractor={item => item.id}
                ListHeaderComponent={header}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 15
    },
    total: {
        color: 'gray',
        marginLeft: 2,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 14
    }
});

export default ListCourse;