import React from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { PROFILE, SETTING } from '../../../globals/KeyScreen';


const HeaderRight = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(PROFILE, {name: 'Tran Quang Thien'})}>
                <FontAwesome name="user-circle" size={20} color="lightskyblue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SETTING)}>
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