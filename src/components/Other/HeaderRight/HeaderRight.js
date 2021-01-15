import React from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';


const HeaderRight = ({navigation}) => {
    const {languageConstant} = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(languageConstant.PROFILE, {name: 'Tran Quang Thien'})}>
                <FontAwesome name="user-circle" size={20} color="lightskyblue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(languageConstant.SETTING)}>
                <MaterialIcons style={{marginLeft: 20}} name="settings" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 10
    }
});

export default HeaderRight;