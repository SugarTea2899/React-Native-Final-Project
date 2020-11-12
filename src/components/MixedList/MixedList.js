import React from 'react';
import {View, StyleSheet, SectionList } from 'react-native';
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
                title: 'React1',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '2',
                title: 'React2',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '3',
                title: 'React3',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '4',
                title: 'React4',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '5',
                title: 'React5',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '6',
                title: 'React6',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
            },
            {
                id: '7',
                title: 'React7',
                author: 'Simon Allardice',
                level: 'Beginer',
                date: 'Oct 2020',
                time: '2h 8m',
                image: require('../../../assets/background_1.jpg')
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
                image: require('../../../assets/author1.jpg')        
            },
            {
                id: '2',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')           
            },
            {
                id: '3',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')             
            },
            {
                id: '4',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')             
            },
            {
                id: '5',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')             
            },
            {
                id: '6',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')             
            },
            {
                id: '7',
                name: 'Simon Allardice',
                image: require('../../../assets/author1.jpg')             
            },            
        ]
    }
]

const MixedList = ({navigation}) => {

    const renderItem = ({item, section}) => {
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
                sections={DATA}
                keyExtractor={(item, index) => item.id * index}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, data}}) => <Header title={title} total={data.length}/>}
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
    }
});

export default MixedList;