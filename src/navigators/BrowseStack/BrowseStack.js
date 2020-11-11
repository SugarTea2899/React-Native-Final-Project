import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import BrowseScreen from '../../components/Main/BrowseScreen/BrowseScreen';
import NewRelease from '../../components/Main/BrowseScreen/NewRelease/NewRelease';
import PathSuggest from '../../components/Main/BrowseScreen/PathsSuggest/PathsSuggest';
import PathDetail from '../../components/PathDetail/PathDetail';
import CoursesSuggest from '../../components/Main/BrowseScreen/CoursesSuggest/CoursesSuggest';
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import Profile from '../../components/AccountManagement/Profile/Profile';
import SkillDetail from '../../components/SkillDetail/SkillDetail';

const Stack = createStackNavigator();

const BrowseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Browse'
                component={BrowseScreen}
                options={ ({navigation}) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation}/>
                    ),
                })}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
            />            
            <Stack.Screen
                name='Course Suggest'
                component={CoursesSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Path Suggest'
                component={PathSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Path Detail"
                component={PathDetail}
            />
            <Stack.Screen 
                name='Skill Detail'
                component={SkillDetail}
                options={({route}) => ({
                    title: route.params.content
                })}
            />                                                   
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;