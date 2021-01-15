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
import { BROWSE, PATH_SUGGEST, PROFILE, COURSE_DETAIL, PATH_DETAIL, SKILL_DETAIL, LIST_COURSE, LIST_PATH, AUTHOR, FORGOT_PASSWORD, SETTING, COURSE_SUGGEST, LOGIN, REGISTER, EDIT_INFO_SCREEN, CHANGE_PASSWORD } from '../../globals/KeyScreen';
import Register from '../../components/Authentication/Register/Register';
import UpdateForm from '../../components/AccountManagement/UpdateForm/UpdateForm';
import ChangePasswordForm from '../../components/AccountManagement/ChangePasswordForm/ChangePasswordForm';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ThemeContext } from '../../contexts/ThemeContext';
const Stack = createStackNavigator();

const BrowseStack = () => {
    const {languageConstant} = useContext(LanguageContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={languageConstant.BROWSE}
                component={BrowseScreen}
                options={ ({navigation}) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation}/>
                    ),
                })}
            />
            <Stack.Screen
                name={languageConstant.PROFILE}
                component={Profile}
            />            
            <Stack.Screen
                name={languageConstant.COURSE_SUGGEST}
                component={CoursesSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name={languageConstant.COURSE_DETAIL}
                component={CourseDetail}
                options={({route}) => ({
                    title: route.params.course.title || route.params.course.courseTitle
                })}
            />
            <Stack.Screen 
                name={languageConstant.SKILL_DETAIL}
                component={SkillDetail}
                options={({route}) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name={languageConstant.LIST_COURSE}
                component={ListCourse}
                options={({route}) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name={languageConstant.AUTHOR}
                component={AuthorDetail}
            />
            <Stack.Screen
                name={languageConstant.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{
                    title: 'Forgot Password',
                }}
            />
            <Stack.Screen
                name={languageConstant.SETTING}
                component={Setting}
            />
            <Stack.Screen 
                name={languageConstant.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={languageConstant.REGISTER}
                component={Register}
            />
            <Stack.Screen
                name={languageConstant.EDIT_INFO_SCREEN}
                component={UpdateForm}
            />
            <Stack.Screen
                name={languageConstant.CHANGE_PASSWORD}
                component={ChangePasswordForm}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;