import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import PathSection from '../BrowseScreen/PathSection/PathSection';
import CourseSection from './CourseSection/CourseSection';



const HomeScreen = ({navigation}) => {
    const handleHistory = () => {
        navigation.navigate('List Course', {title: 'History'});
    }
    const handleBookmark = () => {
        navigation.navigate('List Course', {title: 'Bookmark'})
    }
    const handlePath = () => {
        navigation.navigate('List Path', {title: 'Paths'});
    }
    const handleChannel = () => {
        navigation.navigate('List Path', {title: 'Channels'})
    }
    return (
        <View style={{flex: 1, marginBottom: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CourseSection handleSeeAll={handleHistory} navigation={navigation} style={{marginTop: 20}} title={'History'} />
                <PathSection handleSeeAll={handlePath} navigation={navigation} title={'Paths'}/>
                <PathSection handleSeeAll={handleChannel} navigation={navigation} title={'Channels'}/>
                <CourseSection handleSeeAll={handleBookmark} navigation={navigation} style={{marginTop: 50}} title={'Bookmark'} />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({

})

export default HomeScreen;