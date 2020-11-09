import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ListCourse from '../../Courses/ListCourse';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListAuthors from '../../Authors/ListAuthors/ListAuthors';

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="ALL" component={ListCourse} />
                <Tab.Screen name="COURSES" component={ListCourse} />
                <Tab.Screen name="PATHS" component={ListCourse} />
                <Tab.Screen name="AUTHORS" component={ListAuthors} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default SearchScreen;