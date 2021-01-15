import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ListCourse from '../../Courses/ListCourse';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListAuthors from '../../Authors/ListAuthors/ListAuthors';
import ListPaths from '../../Paths/ListPaths/ListPaths';
import MixedList from '../../MixedList/MixedList';
import SearchBar from '../../Other/SearchBar/SearchBar';
import { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';


const Tab = createMaterialTopTabNavigator();

const SearchScreen = ({navigation}) => {
    const {languageConstant} = useContext(LanguageContext);

    const [result, setResult] = useState({
        courses: [],
        authors: []
    })
    
    const getMixedList = () => {
        return [
            {
                title: languageConstant.COURSE,
                data: result.courses
            },
            {
                title: languageConstant.AUTHOR,
                data: result.authors
            }
        ]
    }

    return (
        <View style={styles.container}>
            <SearchBar setResult={setResult} />
            <Tab.Navigator>
                <Tab.Screen name={languageConstant.ALL} children={() => <MixedList navigation={navigation} results={getMixedList()} />} />
                <Tab.Screen name={languageConstant.COURSE} children={() => <ListCourse navigation={navigation} courses={result.courses} />} />
                <Tab.Screen name={languageConstant.AUTHOR} children={() => <ListAuthors navigation={navigation} authors={result.authors} />} />
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