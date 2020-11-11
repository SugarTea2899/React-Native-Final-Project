import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SkillItem from './SkillItem/SkillItem';

const SkillSection = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Popular Skills</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <SkillItem navigation={navigation} ticked content={'React Native'}/>
                <SkillItem navigation={navigation} ticked content={'React JS'}/>
                <SkillItem navigation={navigation} ticked content={'JavaScript'}/>
                <SkillItem navigation={navigation} content={'Java'}/>
                <SkillItem navigation={navigation} content={'C++'}/>
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