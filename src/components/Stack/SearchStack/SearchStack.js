import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../Main/SearchScreen/SearchScreen';
import SearchBar from '../../Other/SearchBar/SearchBar';

const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{headerTitle: props => <SearchBar />}} 
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default SearchStack;