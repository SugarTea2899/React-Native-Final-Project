import React from 'react';
import {View, StyleSheet, SectionList, Text } from 'react-native';
import ListAuthorsItem from '../Authors/ListAuthorsItem/ListAuthorsItem';
import ListCourseItem from '../Courses/ListCourseItem/ListCourseItem';
import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import Header from './Header/Header';

const DATA = [
    {
        title: 'Courses',
        data: [
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
    },
    {
        title: 'Paths',
        data: [
            {
                id: '1',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')        
            },
            {
                id: '2',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')      
            },
            {
                id: '3',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')        
            },
            {
                id: '4',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')      
            },
            {
                id: '5',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')       
            },
            {
                id: '6',
                title: 'Big Data LDN 2020',
                numCourse: 44,
                image: require('../../../assets/background_1.jpg')       
            },
        ]
    },
    {
        title: 'Authors',
        data: [
            {
                id: '1',
                name: 'Simon Allardice',
                image: require('../../../assets/authors/author_01.jpg'),
                numCourses: 14        
            },
            {
                id: '2',
                name: 'Samer Buna',
                image: require('../../../assets/authors/author_02.jpeg'),
                numCourses: 7            
            },
            {
                id: '3',
                name: 'Cory House',
                image: require('../../../assets/authors/author_03.jpg'),
                numCourses: 5            
            },
            {
                id: '4',
                name: 'Peter Kellner',
                image: require('../../../assets/authors/author_04.jpg'),
                numCourses: 4            
            },
            {
                id: '5',
                name: 'Roland Guijt',
                image: require('../../../assets/authors/author_05.jpg'),
                numCourses: 2            
            },
            {
                id: '6',
                name: 'Chris Minnick',
                image: require('../../../assets/authors/author_06.png'),
                numCourses: 8            
            },
            {
                id: '7',
                name: 'Adhithi Ravichandran',
                image: require('../../../assets/authors/author_07.jpg'),
                numCourses: 11            
            },
            {
                id: '8',
                name: 'Hendrik Swanepoel',
                image: require('../../../assets/authors/author_08.jpg'),
                numCourses: 10            
            },
            {
                id: '9',
                name: 'Liam McLennan',
                image: require('../../../assets/authors/author_09.jpg'),
                numCourses: 14            
            },
            {
                id: '10',
                name: 'Jake Trent',
                image: require('../../../assets/authors/author_10.jpg'),
                numCourses: 9            
            },          
        ]
    }
]

const MixedList = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        if (index >= 4) return <Text style={styles.emptyText}> </Text>;
        switch (section.title){
            case 'Courses':
                return <ListCourseItem navigation={navigation} course={item}/>
            case 'Paths':   
                return <ListPathItem navigation={navigation} path={item} />
            case 'Authors':
                return <ListAuthorsItem navigation={navigation} author={item} />
        }       
    };

    return (
        <View style={styles.container}>
            <SectionList 
                initialNumToRender={2}
                sections={DATA}
                keyExtractor={(item, index) => item.id * index}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, data}}) => <Header navigation={navigation} title={title} total={data.length}/>}
                listKey={new Date().getTime().toString()}
                nestedScrollEnabled
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
    emptyText:{
        width: 0,
        height: 0
    }
});

export default MixedList;