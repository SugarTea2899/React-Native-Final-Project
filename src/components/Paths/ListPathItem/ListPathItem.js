import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { PATH_DETAIL } from '../../../globals/KeyScreen';


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
        flex: 1,
        height: 80,
        alignSelf: 'center',
        resizeMode: 'stretch',
    },
    content: {
        flex: 2,
        marginLeft: 15,
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    numCourse: {
        color: 'gray',
        fontSize: 13
    }
});

export default ListPathItem;