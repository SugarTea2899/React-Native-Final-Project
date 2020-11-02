import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import SkillSection from './SkillSection/SkillSection';

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <ImageButtonSection />
                <SkillSection />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    firstButton: {
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10
    },
    secondButton: {
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
    },
    columnButton: {
        width: 200,
        flex: 1,
        flexDirection: 'column'
    }
});
export default HomeScreen;