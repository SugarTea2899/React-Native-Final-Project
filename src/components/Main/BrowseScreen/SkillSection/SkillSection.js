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
                <View style={styles.skill}>
                    <Text style={styles.skillName}>JavaScript</Text>
                </View>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>C#</Text>
                </View>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>Java</Text>
                </View>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>Node.js</Text>
                </View>
                <View style={styles.skill}>
                    <Text style={styles.skillName}>ASP.NET</Text>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 30
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
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'gray',
        borderRadius: 18,
        marginRight: 10
    }
})
export default SkillSection;