import React from 'react';
import {View, StyleSheet, ImageBackground, Text, StatusBar } from 'react-native';
import ListCourse from '../../../Courses/ListCourse';
import NewReleaseHeader from './NewReleaseHeader/NewReleaseHeader';


const NewRelease = ({navigation}) => {
    const image1 = require('../../../../../assets/background_1.jpg');
    const headerList = <NewReleaseHeader navigation={navigation} image={image1} />
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <ListCourse style={{marginLeft: 0, marginRight: 0}}  hideTotal header={headerList}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    }
});

export default NewRelease;