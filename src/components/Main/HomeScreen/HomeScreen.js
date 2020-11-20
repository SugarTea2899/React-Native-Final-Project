import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import { LIST_COURSE, LIST_PATH } from '../../../globals/keyScreen';
import PathSection from '../BrowseScreen/PathSection/PathSection';
import CourseSection from './CourseSection/CourseSection';



const HomeScreen = ({navigation}) => {
    const handleHistory = () => {
        navigation.navigate(LIST_COURSE, {title: 'History'});
    }
    const handleBookmark = () => {
        navigation.navigate(LIST_COURSE, {title: 'Bookmark'})
    }
    const handlePath = () => {
        navigation.navigate(LIST_PATH, {title: 'Paths'});
    }
    const handleChannel = () => {
        navigation.navigate(LIST_PATH, {title: 'Channels'})
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