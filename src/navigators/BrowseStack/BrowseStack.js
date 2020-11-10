import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseScreen from '../../components/Main/BrowseScreen/BrowseScreen';
import NewRelease from '../../components/Main/BrowseScreen/NewRelease/NewRelease';

const Stack = createStackNavigator();

const BrowseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Browse'
                component={BrowseScreen}
            />
            <Stack.Screen
                name='New Release'
                component={NewRelease}
                options={{
                    headerShown: false
                }}
            />                        
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;