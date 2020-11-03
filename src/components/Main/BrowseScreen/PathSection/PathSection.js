import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import PathItem from './PathItem/PathItem';

const path = {
    title: 'Big Data LDN 2020',
    numCourse: 44,
    image: require('../../../../../assets/background_1.jpg')
}

const PathSection = ({title}) => {

    return (
        <View style={styles.container}>
            <View style={styles.textGroup}>
                <Text style={styles.path}>
                    {title}
                </Text>
                <Text style={styles.seeALL}>
                    {'See all >'}
                </Text>
            </View>
            <ScrollView horizontal={true}>
                <PathItem path={path}/>
                <PathItem path={path}/>
                <PathItem path={path}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10
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