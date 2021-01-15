import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { LanguageContext } from '../../../../contexts/LanguageContext';
import { LIST_COURSE } from '../../../../globals/KeyScreen';
import { convertCourse, convertCourseV2 } from '../../../../globals/util';

import CourseItem from './CourseItem/CourseItem';



const CourseSection = ({ title, style, navigation, courses, hideSeeAll = false }) => {
    const {languageConstant} = useContext(LanguageContext);

    const handleSeeAll = () => {
        navigation.navigate(languageConstant.LIST_COURSE, {title: title, courses: courses.map(item => convertCourseV2(item))})
    }
    const renderCourse = () => {
        if (hideSeeAll) {
            return courses.map((item, index) => <CourseItem key={item.id} navigation={navigation} course={item} />)
        } else {
            return courses.filter((item, index) => index < 4).map((item, index) => <CourseItem key={item.id} navigation={navigation} course={item} />)
        }
    }
    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {!hideSeeAll && <TouchableWithoutFeedback onPress={handleSeeAll}><Text style={styles.seeALL}>{languageConstant.SEE_ALL}</Text></TouchableWithoutFeedback> }
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    courses && renderCourse()
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
    seeALL: {
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
