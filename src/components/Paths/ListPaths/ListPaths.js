import React from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ListPathItem from '../ListPathItem/ListPathItem';

const paths = [
    {
        id: '1',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
    },
    {
        id: '2',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
    },
    {
        id: '3',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
    },
    {
        id: '4',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
    },
    {
        id: '5',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
    },
    {
        id: '6',
        title: 'Big Data LDN 2020',
        numCourse: 44,
        image: require('../../../../assets/background_1.jpg')        
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