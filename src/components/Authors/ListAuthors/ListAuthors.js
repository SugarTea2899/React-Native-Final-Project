import React from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ListAuthorsItem from '../ListAuthorsItem/ListAuthorsItem'

const authors = [
    {
        id: '1',
        name: 'Simon Allardice',
        image: require('../../../../assets/authors/author_01.jpg'),
        numCourses: 14        
    },
    {
        id: '2',
        name: 'Samer Buna',
        image: require('../../../../assets/authors/author_02.jpeg'),
        numCourses: 7            
    },
    {
        id: '3',
        name: 'Cory House',
        image: require('../../../../assets/authors/author_03.jpg'),
        numCourses: 5            
    },
    {
        id: '4',
        name: 'Peter Kellner',
        image: require('../../../../assets/authors/author_04.jpg'),
        numCourses: 4            
    },
    {
        id: '5',
        name: 'Roland Guijt',
        image: require('../../../../assets/authors/author_05.jpg'),
        numCourses: 2            
    },
    {
        id: '6',
        name: 'Chris Minnick',
        image: require('../../../../assets/authors/author_06.png'),
        numCourses: 8            
    },
    {
        id: '7',
        name: 'Adhithi Ravichandran',
        image: require('../../../../assets/authors/author_07.jpg'),
        numCourses: 11            
    },
    {
        id: '8',
        name: 'Hendrik Swanepoel',
        image: require('../../../../assets/authors/author_08.jpg'),
        numCourses: 10            
    },
    {
        id: '9',
        name: 'Liam McLennan',
        image: require('../../../../assets/authors/author_09.jpg'),
        numCourses: 14            
    },
    {
        id: '10',
        name: 'Jake Trent',
        image: require('../../../../assets/authors/author_10.jpg'),
        numCourses: 9            
    },
]

const ListAuthors = ({style, navigation}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.total}>{`${authors.length} Results`}</Text>
            <FlatList 
                data={authors}
                renderItem={({item}) => <ListAuthorsItem navigation={navigation} author={item}/>}
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

export default ListAuthors;