import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ListCourse from '../../Courses/ListCourse';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListAuthors from '../../Authors/ListAuthors/ListAuthors';
import ListPaths from '../../Paths/ListPaths/ListPaths';
import MixedList from '../../MixedList/MixedList';
import SearchBar from '../../Other/SearchBar/SearchBar';
import { useState } from 'react';


const Tab = createMaterialTopTabNavigator();

const SearchScreen = ({navigation}) => {
    const [result, setResult] = useState({
        courses: [],
        authors: []
    })
    
    const getMixedList = () => {
        return [
            {
                title: 'Courses',
                data: result.courses
            },
            {
                title: 'Authors',
                data: result.authors
            }
        ]
    }

    return (
        <View style={styles.container}>
            <SearchBar setResult={setResult} />
            <Tab.Navigator>
                <Tab.Screen name="ALL" children={() => <MixedList navigation={navigation} results={getMixedList()} />} />
                <Tab.Screen name="COURSES" children={() => <ListCourse navigation={navigation} courses={result.courses} />} />
                <Tab.Screen name="AUTHORS" children={() => <ListAuthors navigation={navigation} authors={result.authors} />} />
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