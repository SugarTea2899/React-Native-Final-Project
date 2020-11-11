import React from 'react';
import {View, StyleSheet, Text, ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';


const Login = ({navigation}) => {
    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <MyInput lable={'USERNAME'} />
                <MyInput style={{marginTop: 35}} isPassWord={true} lable={'PASSWORD'}/>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate('ForgotPassword')}}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableWithoutFeedback>
                <MyButton style={styles.button}  text={'LOGIN'} />
                <TouchableWithoutFeedback onPress={handleRegister}>
                    <Text style={styles.create}>Create Account</Text>
                </TouchableWithoutFeedback>
                
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
