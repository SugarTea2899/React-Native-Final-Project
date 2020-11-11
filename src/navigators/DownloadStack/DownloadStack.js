import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DownloadScreen from '../../components/Main/DownloadScreen/DownloadScreen'
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import Profile from '../../components/AccountManagement/Profile/Profile';
import CourseDetail from '../../components/CourseDetail/CourseDetail'
import Login from '../../components/Authentication/Login/Login';
import Register from '../../components/Authentication/Register/Register';
import SkillDetail from '../../components/SkillDetail/SkillDetail';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';

const Stack = createStackNavigator();

const DownloadStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Download'
                component={DownloadScreen}
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
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default DownloadStack;