import React from 'react';
import {View, StyleSheet, ImageBackground, Text, StatusBar } from 'react-native';
import { NEW_RELEASE } from '../../../../globals/constants';
import ListCourse from '../../../Courses/ListCourse';
import BrowseHeader from '../BrowseHeader/BrowseHeader';


const NewRelease = ({navigation}) => {
    const image1 = require('../../../../../assets/background_1.jpg');
    const headerList = <BrowseHeader navigation={navigation} image={image1} height={160} content={NEW_RELEASE} />
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