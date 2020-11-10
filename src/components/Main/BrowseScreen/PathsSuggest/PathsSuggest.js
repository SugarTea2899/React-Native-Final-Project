import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native';
import BrowseHeader from '../BrowseHeader/BrowseHeader';
import PathSection from '../PathSection/PathSection';


const PathSuggest = ({navigation, route}) => {
    const {image, content} = route.params;
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <BrowseHeader navigation={navigation} image={image} height={250} content={content} />
            <PathSection navigation={navigation} title={`Paths in ${content[0] + content.slice(1).toLowerCase()}`} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default PathSuggest;