import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SkillItem from './SkillItem/SkillItem';

const SkillSection = ({navigation, categories}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories && categories.map((item, index) => <SkillItem id={item.id} key={index} navigation={navigation} content={item.name}/> )}
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