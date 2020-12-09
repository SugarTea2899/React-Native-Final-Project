import React from 'react';
import {View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';

const MyInput = ({style, lable, isPassWord = false, isNumber = false, text = '', setText}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>
                {lable}
            </Text>
            <TextInput value={text} onChangeText={(text) => setText(text)} keyboardType={isNumber ? 'numeric' : 'default'} secureTextEntry={isPassWord} style={styles.textInput} />
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
