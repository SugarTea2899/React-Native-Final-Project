import React from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ListAuthorsItem from '../ListAuthorsItem/ListAuthorsItem'

const authors = [
    {
        id: '1',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '2',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '3',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '4',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '5',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '6',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
    {
        id: '7',
        name: 'Simon Allardice',
        image: require('../../../../assets/author1.jpg')        
    },
]

const ListAuthors = ({style, navigation}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.total}>11 Results</Text>
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