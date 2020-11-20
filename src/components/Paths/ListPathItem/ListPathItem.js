import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { PATH_DETAIL } from '../../../globals/keyScreen';


const ListPathItem = ({path, style, navigation}) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate(PATH_DETAIL, {path: path})}}>
            <View style={[styles.container, style]}>
                <Image style={styles.image} source={path.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{path.title}</Text>
                    <Text style={styles.numCourse}>{`${path.numCourse} courses`}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    container: {
        height: 110,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8
    },
    image: {
        height: 80,
        width: 120,
        alignSelf: 'center'
    },
    content: {
        marginLeft: 15,
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    numCourse: {
        color: 'gray',
        fontSize: 14
    }
});

export default ListPathItem;