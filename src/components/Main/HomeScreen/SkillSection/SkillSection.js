import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const SkillSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular Skills</Text>
            <ScrollView horizontal={true}>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>Angular</Text>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginTop: 20
    },
    skillName: {
        color: 'white'
    },
    skill: {
        marginTop: 8,
        padding: 8,
        backgroundColor: 'gray',
        borderRadius: 18
    }
})
export default SkillSection;