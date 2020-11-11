import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import TextArea from '../Common/TextArea/TextArea';
import ListCourse from '../Courses/ListCourse';
import PathItem from '../Main/BrowseScreen/PathSection/PathItem/PathItem';
import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import HeaderPath from './HeaderPath/HeaderPath';


const PathDetail = ({route, navigation}) => {
    const {path} = route.params;
    const header = <HeaderPath path={path} />
    return (
        <View style={styles.container}>
            <View style={styles.listCourse}>
                <ListCourse navigation={navigation}  style={styles.list} header={header} hideTotal/>
            </View>          
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },

    listCourse: {
        flex: 1
    },
    list: {
        
    }
});

export default PathDetail;