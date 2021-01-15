import React from 'react';
import { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { LanguageContext } from '../../../../contexts/LanguageContext';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import SkillItem from './SkillItem/SkillItem';

const SkillSection = ({navigation, categories}) => {
    const {languageConstant} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {color: theme.TEXT_COLOR}]}>{languageConstant.CATEGORY}</Text>
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
        marginTop: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginTop: 20
    }
})
export default SkillSection;