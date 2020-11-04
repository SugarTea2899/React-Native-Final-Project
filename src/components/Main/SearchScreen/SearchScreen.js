import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ListCourse from '../../Courses/ListCourse';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name="ALL" component={ListCourse} />
                <Tab.Screen name="COURSES" component={ListCourse} />
                <Tab.Screen name="PATHS" component={ListCourse} />
                <Tab.Screen name="AUTHORS" component={ListCourse} />
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