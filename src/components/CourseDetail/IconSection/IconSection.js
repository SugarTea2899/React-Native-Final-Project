import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import IconButton from '../../Common/IconButton/IconButton';
const IconSection = () => {
    return (
        <View style={styles.container}>
            <IconButton name="bookmark" content="Bookmark"/>
            <IconButton name="plus" content="Add to Channel"/>
            <IconButton name="download" content="download"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 35
    }
});


export default IconSection;