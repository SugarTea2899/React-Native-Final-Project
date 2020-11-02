import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import PathItem from './PathItem/PathItem';

const PathSection = () => {

    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={styles.path}>
                    Paths
                </Text>
                <Text style={styles.seeALL}>
                    See all >
                </Text>
            </View>
            <ScrollView horizontal={true}>
                <PathItem />
                <PathItem />
                <PathItem />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 50,
    },
    textGroup: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    path: {
        color: 'white',
        fontSize: 18
    },
    seeALL:{
        color: 'ghostwhite',
        fontStyle: 'italic',
        paddingRight: 10,
        paddingTop: 5
    }
});

export default PathSection;