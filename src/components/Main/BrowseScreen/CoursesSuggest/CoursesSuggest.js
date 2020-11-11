import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native';
import ListCourse from '../../../Courses/ListCourse';
import BrowseHeader from '../BrowseHeader/BrowseHeader';


const CoursesSuggest = ({navigation, route}) => {
    const {image, content} = route.params;
    const headerList = <BrowseHeader navigation={navigation} image={image} height={160} content={content} />
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <ListCourse style={{marginLeft: 0, marginRight: 0}}  hideTotal header={headerList}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default CoursesSuggest;