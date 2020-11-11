import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import BrowseScreen from '../../components/Main/BrowseScreen/BrowseScreen';
import PathSuggest from '../../components/Main/BrowseScreen/PathsSuggest/PathsSuggest';
import PathDetail from '../../components/PathDetail/PathDetail';
import CoursesSuggest from '../../components/Main/BrowseScreen/CoursesSuggest/CoursesSuggest';
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import Profile from '../../components/AccountManagement/Profile/Profile';
import SkillDetail from '../../components/SkillDetail/SkillDetail';
import CourseDetail from '../../components/CourseDetail/CourseDetail';
import ListCourse from '../../components/Courses/ListCourse';
import ListPaths from '../../components/Paths/ListPaths/ListPaths';
import AuthorDetail from '../../components/AuthorDetail/AuthorDetail';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';
import Setting from '../../components/AccountManagement/Setting/Setting';
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
                name="CourseDetail"
                component={CourseDetail}
                options={({route}) => ({
                    title: route.params.course.title
                })}
            />
            <Stack.Screen 
                name="Path Detail"
                component={PathDetail}
                options={({route}) => ({
                    title: route.params.path.title
                })}
            />
            <Stack.Screen 
                name='Skill Detail'
                component={SkillDetail}
                options={({route}) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name="List Course"
                component={ListCourse}
                options={({route}) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name="List Path"
                component={ListPaths}
                options={({route}) => ({
                    title: route.params.title
                })}
            /> 
            <Stack.Screen
                name='Author'
                component={AuthorDetail}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: 'Forgot Password',
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name='Setting'
                component={Setting}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;