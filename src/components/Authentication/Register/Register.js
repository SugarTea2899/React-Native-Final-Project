import React from 'react';
import {View, StyleSheet, ScrollView, Text } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <MyInput lable={'YOUR NAME'}/>
                <MyInput style={{marginTop: 30}} lable={'USERNAME'}/>
                <MyInput style={{marginTop: 30}} lable={'EMAIL'}/>
                <MyInput style={{marginTop: 30}} lable={'PASSWORD'}/>
                <MyInput style={{marginTop: 30}} lable={'RE-PASSWORD'}/>
                <MyButton style={styles.button}  text={'SIGN UP'} />
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        paddingLeft: 35,
        paddingRight: 35,
    },
    scrollView: {
        flexGrow: 1,
        paddingTop: 40,
        paddingBottom: 20
    },
    title: {
        fontSize: 30,
        color: 'white',
        paddingTop: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'dodgerblue',
        marginTop: 40,
    }
});

export default Register;