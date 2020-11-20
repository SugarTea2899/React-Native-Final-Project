import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native';
import { LIST_PATH } from '../../../../globals/keyScreen';
import BrowseHeader from '../BrowseHeader/BrowseHeader';
import PathSection from '../PathSection/PathSection';


const PathSuggest = ({navigation, route}) => {
    const {image, contentImage, content} = route.params;
    const handleSeeAll = () => {
        navigation.navigate(LIST_PATH, {title: content});
    }
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <BrowseHeader navigation={navigation} image={image} height={250} content={contentImage} />
            <PathSection handleSeeAll={handleSeeAll} navigation={navigation} title={`Paths in ${content}`} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default PathSuggest;