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
import Login from '../../components/Authentication/Login/Login';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';
import Setting from '../../components/AccountManagement/Setting/Setting';
import { BROWSE, PATH_SUGGEST, PROFILE, COURSE_DETAIL, PATH_DETAIL, SKILL_DETAIL, LIST_COURSE, LIST_PATH, AUTHOR, FORGOT_PASSWORD, SETTING, COURSE_SUGGEST, LOGIN, REGISTER, EDIT_INFO_SCREEN } from '../../globals/KeyScreen';
import Register from '../../components/Authentication/Register/Register';
import UpdateForm from '../../components/AccountManagement/UpdateForm/UpdateForm';
const Stack = createStackNavigator();

const BrowseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={BROWSE}
                component={BrowseScreen}
                options={ ({navigation}) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation}/>
                    ),
                })}
            />
            <Stack.Screen
                name={PROFILE}
                component={Profile}
            />            
            <Stack.Screen
                name={COURSE_SUGGEST}
                component={CoursesSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={PATH_SUGGEST}
                component={PathSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name={COURSE_DETAIL}
                component={CourseDetail}
                options={({route}) => ({
                    title: route.params.course.title
                })}
            />
            <Stack.Screen 
                name={PATH_DETAIL}
                component={PathDetail}
                options={({route}) => ({
                    title: route.params.path.title
                })}
            />
            <Stack.Screen 
                name={SKILL_DETAIL}
                component={SkillDetail}
                options={({route}) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name={LIST_COURSE}
                component={ListCourse}
                options={({route}) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name={LIST_PATH}
                component={ListPaths}
                options={({route}) => ({
                    title: route.params.title
                })}
            /> 
            <Stack.Screen
                name={AUTHOR}
                component={AuthorDetail}
            />
            <Stack.Screen
                name={FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{
                    title: 'Forgot Password',
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={SETTING}
                component={Setting}
            />
            <Stack.Screen 
                name={LOGIN}
                component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={REGISTER}
                component={Register}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={EDIT_INFO_SCREEN}
                component={UpdateForm}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;