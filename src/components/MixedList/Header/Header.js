import React from 'react';
import { useContext } from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { AUTHOR_TAB, COURSE_TAB, PATH_TAB } from '../../../globals/KeyScreen';


const Header = ({title, total, navigation}) => {
    const {languageConstant} = useContext(LanguageContext);

    const handleSwitchTab = () => {
        switch (title) {
            case languageConstant.COURSE:
                navigation.navigate(languageConstant.COURSE_TAB);
                break;
            case languageConstant.AUTHOR:
                navigation.navigate(languageConstant.AUTHOR_TAB);
                break;
            default:
                break;
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handleSwitchTab}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.total}>{`${total} ${languageConstant.RESULT} >`}</Text>
            </View>
        </TouchableWithoutFeedback>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    total: {
        color: 'gray',
        fontSize: 12,
        alignSelf: 'center',
        paddingRight: 10
    }
});

export default Header;