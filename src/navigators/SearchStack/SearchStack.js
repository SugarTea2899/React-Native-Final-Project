import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../components/Main/SearchScreen/SearchScreen';
import SearchBar from '../../components/Other/SearchBar/SearchBar';
import AuthorDetail from '../../components/AuthorDetail/AuthorDetail';
import CourseDetail from '../../components/CourseDetail/CourseDetail';
import PathDetail from '../../components/PathDetail/PathDetail';
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
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default SearchStack;