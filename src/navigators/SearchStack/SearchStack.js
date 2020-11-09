import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../components/Main/SearchScreen/SearchScreen';
import SearchBar from '../../components/Other/SearchBar/SearchBar';
import AuthorDetail from '../../components/AuthorDetail/AuthorDetail';

const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{headerTitle: props => <SearchBar />}} 
            />
            <Stack.Screen
                name='Author'
                component={AuthorDetail}
            />            
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default SearchStack;