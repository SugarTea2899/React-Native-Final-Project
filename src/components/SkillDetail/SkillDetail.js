import React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import AuthorSection from '../Main/BrowseScreen/AuthorSection/AuthorSection';
import PathSection from '../Main/BrowseScreen/PathSection/PathSection';
import CourseSection from '../Main/HomeScreen/CourseSection/CourseSection';

const SkillDetail = ({route, navigation}) => {
    const {content} = route.params;
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PathSection style={styles.path} navigation={navigation} title={`Paths in ${content}`}/>
                <CourseSection style={styles.course} navigation={navigation} title={`New in ${content}`} />
                <CourseSection style={styles.course} navigation={navigation} title={`Trending in ${content}`} />
                <AuthorSection  style={styles.author} />
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    path: {
        marginTop: 20,
        marginLeft: 10,
    },
    course: {
        marginTop: 40,
        marginLeft: 10,
    },
    author: {
        marginBottom: 20,
        marginLeft: 10,
    }
});

export default SkillDetail;