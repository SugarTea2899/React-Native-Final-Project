import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';


const ListAuthorsItem = ({author}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/author1.jpg')} />
            <View style={styles.content}>
                <Text style={styles.name}>acb</Text>
                <Text style={styles.numCourses}>11 Course</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.8
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        borderRadius: 25,
        marginLeft: 4
    },
    content: {
        marginLeft: 20,
        alignSelf: 'center'
    },
    name: {
        color: 'white',
        fontSize: 17
    },
    numCourses: {
        color: 'gray',
        fontSize: 11,
        marginTop: 2
    }
});

export default ListAuthorsItem;