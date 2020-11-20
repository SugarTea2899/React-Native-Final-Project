import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { AUTHOR } from '../../../globals/keyScreen';


const ListAuthorsItem = ({author, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(AUTHOR, {author: author})}>
            <View style={styles.container}>
                <Image style={styles.image} source={author.image} />
                <View style={styles.content}>
                    <Text style={styles.name}>{author.name}</Text>
                    <Text style={styles.numCourses}>11 Course</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        borderBottomColor: 'gray',
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