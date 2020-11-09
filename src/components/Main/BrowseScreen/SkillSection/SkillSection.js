import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SkillItem from './SkillItem/SkillItem';

const SkillSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular Skills</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <SkillItem ticked content={'React Native'}/>
                <SkillItem ticked content={'React JS'}/>
                <SkillItem ticked content={'JavaScript'}/>
                <SkillItem content={'Java'}/>
                <SkillItem content={'C++'}/>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 30,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginTop: 20
    }
})
export default SkillSection;