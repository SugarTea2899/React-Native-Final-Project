import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Main/HomeScreen/HomeScreen';
import HeaderRight from '../../Other/HeaderRight/HeaderRight';
import Profile from '../../AccountManagement/Profile/Profile';

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
        </Stack.Navigator>
    );
}



export default HomeStack;