import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import PathItem from './PathItem/PathItem';

const path = {
    title: 'Big Data LDN 2020',
    numCourse: 44,
    image: require('../../../../../assets/background_1.jpg')
}

const PathSection = ({title, navigation, style, handleSeeAll}) => {

    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.path}>
                    {title}
                </Text>
                <TouchableWithoutFeedback onPress={handleSeeAll}>
                    <Text style={styles.seeALL}>
                        {'See all >'}
                    </Text>
                </TouchableWithoutFeedback>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <PathItem navigation={navigation} path={path}/>
                <PathItem navigation={navigation} path={path}/>
                <PathItem navigation={navigation} path={path}/>
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