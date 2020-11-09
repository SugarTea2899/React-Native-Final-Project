import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import PathSection from '../BrowseScreen/PathSection/PathSection';
import CourseSection from './CourseSection/CourseSection';



const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, marginBottom: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CourseSection navigation={navigation} style={{marginTop: 20}} title={'History'} />
                <PathSection navigation={navigation} title={'Paths'}/>
                <PathSection navigation={navigation} title={'Channels'}/>
                <CourseSection style={{marginTop: 50}} title={'Bookmark'} />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({

})

export default HomeScreen;