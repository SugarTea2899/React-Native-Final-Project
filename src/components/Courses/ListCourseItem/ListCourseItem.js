import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ListCourseItem = ({course}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={course.image} />
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {course.title}
                </Text>
                <Text style={styles.otherText}>
                    {course.author}
                </Text>
                <Text style={styles.otherText}>
                    {`${course.level}  -  ${course.date}  -  ${course.time}`}
                </Text>
            </View>
            <Entypo style={{alignSelf: 'center', marginLeft: 10}} name="dots-three-vertical" size={20} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.5
    },
    image: {
        height: 80,
        width: 130,
        alignSelf: 'center'
    },
    textGroup: {
        padding: 18
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    otherText: {
        color: 'lightgray',
        fontSize: 15,
        marginTop: 3
    }
});


export default ListCourseItem;