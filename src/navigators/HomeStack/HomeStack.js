import React from 'react';
import {View, StyleSheet } from 'react-native';
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
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
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
                name="Login"
                component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
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
                name='Skill Detail'
                component={SkillDetail}
                options={({route}) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name='ForgotPassword'
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



export default HomeStack;