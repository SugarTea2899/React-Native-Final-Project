import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import HomeScreen from '../../components/Main/HomeScreen/HomeScreen';
import Profile from '../../components/AccountManagement/Profile/Profile';
import CourseDetail from '../../components/CourseDetail/CourseDetail'
import PathDetail from '../../components/PathDetail/PathDetail';
import Login from '../../components/Authentication/Login/Login';
import Register from '../../components/Authentication/Register/Register';
import ListCourse from '../../components/Courses/ListCourse';
import ListPaths from '../../components/Paths/ListPaths/ListPaths';
import SkillDetail from '../../components/SkillDetail/SkillDetail';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';
import Setting from '../../components/AccountManagement/Setting/Setting';
import { CHANGE_PASSWORD, COURSE_DETAIL, EDIT_INFO_SCREEN, FORGOT_PASSWORD, HOME, LIST_COURSE, LIST_PATH, LOGIN, PATH_DETAIL, PROFILE, REGISTER, SETTING, SKILL_DETAIL } from '../../globals/KeyScreen';
import UpdateForm from '../../components/AccountManagement/UpdateForm/UpdateForm';
import ChangePasswordForm from '../../components/AccountManagement/ChangePasswordForm/ChangePasswordForm';
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={HOME}
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name={PROFILE}
                component={Profile}
            />
            <Stack.Screen
                name={COURSE_DETAIL}
                component={CourseDetail}
                options={({ route }) => ({
                    title: route.params.course.title
                })}
            />
            <Stack.Screen
                name={PATH_DETAIL}
                component={PathDetail}
                options={({ route }) => ({
                    title: route.params.path.title
                })}
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
                name={LIST_COURSE}
                component={ListCourse}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name={LIST_PATH}
                component={ListPaths}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name={SKILL_DETAIL}
                component={SkillDetail}
                options={({ route }) => ({
                    title: route.params.content
                })}
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
                name={EDIT_INFO_SCREEN}
                component={UpdateForm}
            />
            <Stack.Screen
                name={CHANGE_PASSWORD}
                component={ChangePasswordForm}
            />
        </Stack.Navigator>
    );
}



export default HomeStack;