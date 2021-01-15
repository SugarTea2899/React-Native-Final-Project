import React from 'react';
import { useContext } from 'react';
import {View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { ThemeContext } from '../../../contexts/ThemeContext';

const MyInput = ({style, lable, isPassWord = false, isNumber = false, text = '', setText}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>
                {lable}
            </Text>
            <TextInput  value={text} onChangeText={(text) => setText(text)} keyboardType={isNumber ? 'numeric' : 'default'} secureTextEntry={isPassWord} style={[styles.textInput, {color: theme.TEXT_COLOR}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    textInput: {
        color: 'white',
        paddingBottom: 7,
        fontSize: 15,
        marginTop: 3
    },
    text: {
        color: 'gray',
        letterSpacing: 1.5
    }
});

export default MyInput;
