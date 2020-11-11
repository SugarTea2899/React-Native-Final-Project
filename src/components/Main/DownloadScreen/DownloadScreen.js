import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListCourse from '../../Courses/ListCourse';

const DownloadScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1}}>
            <ListCourse navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default DownloadScreen;