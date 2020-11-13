import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';


const Transcript = () => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder={'Search transcript'}
                placeholderTextColor='white'
                autoFocus={false}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        color: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
        fontSize: 17,
        paddingBottom: 7
    }
});

export default Transcript;