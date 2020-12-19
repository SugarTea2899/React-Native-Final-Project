import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../../components/Main/SearchScreen/SearchScreen';
import SearchBar from '../../components/Other/SearchBar/SearchBar';
import AuthorDetail from '../../components/AuthorDetail/AuthorDetail';
import CourseDetail from '../../components/CourseDetail/CourseDetail';
import PathDetail from '../../components/PathDetail/PathDetail';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';
import { AUTHOR, COURSE_DETAIL, PATH_DETAIL, SEARCH } from '../../globals/KeyScreen';
const Stack = createStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SEARCH}
                component={SearchScreen}
                options={{headerTitle: props => <SearchBar />}} 
            />
            <Stack.Screen
                name={AUTHOR}
                component={AuthorDetail}
            /> 
            <Stack.Screen 
                name={COURSE_DETAIL}
                component={CourseDetail}
                options={({route}) => ({
                    title: route.params.course.title
                })}
            />
            <Stack.Screen 
                name={PATH_DETAIL}
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