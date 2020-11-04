import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';


const Login = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <MyInput lable={'USERNAME'} isPassWord={false}/>
                <MyInput style={{marginTop: 35}} isPassWord={true} lable={'PASSWORD'}/>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <MyButton style={styles.button}  text={'LOGIN'} />
                <Text style={styles.create}>Create Account</Text>
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
    button: {
        backgroundColor: 'dodgerblue',
        marginTop: 50,
    },
    forgotPassword: {
        color: 'gray',
        alignSelf: 'flex-end',
        fontSize: 15,
        marginTop: 15
    },
    create: {
        color: 'gray',
        alignSelf: 'center',
        fontSize: 15,
        paddingTop: 70,
        fontWeight: 'bold'
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 20
    }
});

export default Login;
