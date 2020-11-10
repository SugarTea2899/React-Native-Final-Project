import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import BrowseScreen from '../../components/Main/BrowseScreen/BrowseScreen';
import NewRelease from '../../components/Main/BrowseScreen/NewRelease/NewRelease';
import PathSuggest from '../../components/Main/BrowseScreen/PathsSuggest/PathsSuggest';
import PathDetail from '../../components/PathDetail/PathDetail';

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
            <Stack.Screen
                name='Path Sugguest'
                component={PathSuggest}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Path Detail"
                component={PathDetail}
            />                                                   
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default BrowseStack;