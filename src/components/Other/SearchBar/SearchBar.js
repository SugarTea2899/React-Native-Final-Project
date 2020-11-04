import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.bar}>
            <TextInput style={styles.textInput} placeholder={'Search'} placeholderTextColor={'lightgray'} />
            <FontAwesome style={styles.customIcon} name="remove" size={24} color="white" />
        </View>
    );
}


const styles = StyleSheet.create({
    bar: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 15
    },
    textInput: {
        flex: 1,
        height: 40,
        width: 'auto',
        fontSize: 17,
        marginRight: 10,
        color: 'white'
    },
    customIcon: {
        marginRight: 4
    }
});

export default SearchBar;