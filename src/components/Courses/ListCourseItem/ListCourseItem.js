import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { COURSE_DETAIL } from '../../../globals/keyScreen';

const ListCourseItem = ({course, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(COURSE_DETAIL, {course: course})}>
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
                <Entypo style={{alignSelf: 'center', flex: 1, textAlign: 'right'}} name="dots-three-vertical" size={20} color="white" />
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
        flex: 1
    },
    image: {
        height: 80,
        alignSelf: 'center',
        flex: 3,
        resizeMode: 'stretch',
    },
    textGroup: {
        paddingTop: 18,
        paddingLeft: 12,
        flex: 4
    },
    title: {
        color: 'white',
        fontSize: 16,
        lineHeight: 22
    },
    otherText: {
        color: 'lightgray',
        fontSize: 11,
        marginTop: 2
    }
});


export default ListCourseItem;