import React from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ListPathItem from '../ListPathItem/ListPathItem';

const paths = [
    {
        id: '1',
        title: 'Building Web Applications with React',
        numCourse: 44,
        image: require('../../../../assets/courses/course_01.png')        
    },
    {
        id: '2',
        title: 'Microsoft Azure Adminstrator',
        numCourse: 21,
        image: require('../../../../assets/paths/path_01.png')        
    },
    {
        id: '3',
        title: 'Working with REST API in JavaScript',
        numCourse: 6,
        image: require('../../../../assets/paths/path_02.jpg')        
    },
    {
        id: '4',
        title: 'AWS Certified Solutions',
        numCourse: 8,
        image: require('../../../../assets/paths/path_03.png')        
    },
    {
        id: '5',
        title: 'Core Python',
        numCourse: 15,
        image: require('../../../../assets/paths/path_04.png')        
    },
    {
        id: '6',
        title: 'Design Pattern in Java',
        numCourse: 5,
        image: require('../../../../assets/paths/path_05.jpeg')        
    },
    {
        id: '7',
        title: 'Java Unit Testing',
        numCourse: 5,
        image: require('../../../../assets/paths/path_05.jpeg')        
    },
    {
        id: '8',
        title: 'Introduction to Professional Scrum',
        numCourse: 5,
        image: require('../../../../assets/paths/path_06.jpg')        
    },
    {
        id: '9',
        title: 'Java Spring Framework',
        numCourse: 7,
        image: require('../../../../assets/paths/path_07.png')        
    },
    {
        id: '10',
        title: 'Developing Applications with Google Could',
        numCourse: 2,
        image: require('../../../../assets/paths/path_08.jpg')        
    },
]

const ListPaths = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.total}>{`${paths.length} Results`}</Text>
            <FlatList 
                data={paths}
                renderItem={({item}) => <ListPathItem navigation={navigation} path={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,   
        marginLeft: 15,
        paddingBottom: 15,
        marginRight: 15,
    },
    total: {
        color: 'gray',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14
    }
});

export default ListPaths;