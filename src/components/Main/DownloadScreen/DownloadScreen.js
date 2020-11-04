import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListCourse from '../../Courses/ListCourse';

const DownloadScreen = () => {
    return (
        <View style={{ flex: 1}}>
            <Text style={styles.text}>135 videos</Text>
            <ListCourse />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'right',
        paddingRight: 5,
        marginTop: 10,
        fontStyle: 'italic'
    }
})

export default DownloadScreen;