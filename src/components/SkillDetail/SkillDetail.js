import React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import AuthorSection from '../Main/BrowseScreen/AuthorSection/AuthorSection';
import PathSection from '../Main/BrowseScreen/PathSection/PathSection';
import CourseSection from '../Main/HomeScreen/CourseSection/CourseSection';

const SkillDetail = ({route, navigation}) => {
    const {content} = route.params;
    const handleSeeAllPath = () => {
        navigation.navigate('List Path', {title: `Paths in ${content}`});
    }
    const handleSeeNew = () => {
        navigation.navigate('List Course', {title: `New in ${content}`});
    }
    const handleSeeTrending = () => {
        navigation.navigate('List Course', {title: `Trending in ${content}`});
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PathSection handleSeeAll={handleSeeAllPath} style={styles.path} navigation={navigation} title={`Paths in ${content}`}/>
                <CourseSection handleSeeAll={handleSeeNew} style={styles.course} navigation={navigation} title={`New in ${content}`} />
                <CourseSection handleSeeAll={handleSeeTrending} style={styles.course} navigation={navigation} title={`Trending in ${content}`} />
                <AuthorSection navigation={navigation}  style={styles.author} />
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