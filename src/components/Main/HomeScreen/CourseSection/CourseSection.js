import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';

import CourseItem from './CourseItem/CourseItem';



const CourseSection = ({title, style, navigation, handleSeeAll, courses}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    courses.map((item, index) => <CourseItem key={item.id} navigation={navigation} course={item} />)
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    textGroup: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeALL:{
        color: 'ghostwhite',
        fontStyle: 'italic',
        paddingRight: 10,
        paddingTop: 5
    },
    emptyText: {
        width: 0,
        height: 0
    }
});

export default CourseSection;
