import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CourseInfoSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native For Beginer</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>Scott Lee</Text>
                </View>
            </View>
            <Text style={styles.otherText}>
                    {'Beginner   -   Oct 2020   -   2h 8m'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 1
    },
    skill: {
        marginTop: 8,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'gray',
        borderRadius: 18,
    },
    skillName: {
        color: 'white'
    },
    otherText: {
        color: 'lightgray',
        fontSize: 13,
        marginTop: 11,
        paddingLeft: 2
    }
});

export default CourseInfoSection;