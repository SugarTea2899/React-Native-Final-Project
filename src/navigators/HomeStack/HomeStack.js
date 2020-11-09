import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import HomeScreen from '../../components/Main/HomeScreen/HomeScreen';
import Profile from '../../components/AccountManagement/Profile/Profile';
import CourseDetail from '../../components/CourseDetail/CourseDetail'
import PathDetail from '../../components/PathDetail/PathDetail';

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
            />
            <Stack.Screen 
                name="PathDetail"
                component={PathDetail}
            />            
        </Stack.Navigator>
    );
}



export default HomeStack;