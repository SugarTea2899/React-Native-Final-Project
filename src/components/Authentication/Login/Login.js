import React, { useContext, useState } from 'react';
import {View, StyleSheet, Text, ScrollView, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native';
import { fetchWithoutAu } from '../../../api/fetchData';
import { UserContext } from '../../../contexts/UserContext';
import { API_URL } from '../../../globals/constants';
import { FORGOT_PASSWORD, HOME, REGISTER } from '../../../globals/keyScreen';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';


const Login = ({navigation}) => {
    const handleRegister = () => {
        navigation.navigate(REGISTER);
    }
    const {setContent} = useContext(UserContext);

    const handleLogin = () => {
        if (email === '' || password === ''){
            Alert.alert('Erro', 'Empty infomation');
            return;
        }
        const data = {
            email: email,
            password: password
        }
        fetchWithoutAu(API_URL + "user/login", 'POST', data)
            .then(
                (data) => {
                    setContent(data.token, data.userInfo);
                    navigation.navigate(HOME);
                },
                (erro) => {
                    Alert.alert('Error',erro.message);
                }
            )
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <MyInput text={email} setText={setEmail} lable={'EMAIL'} />
                <MyInput text={password} setText={setPassword} style={{marginTop: 35}} isPassWord={true} lable={'PASSWORD'}/>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate(FORGOT_PASSWORD)}}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableWithoutFeedback>
                <MyButton handleClick={handleLogin} style={styles.button}  text={'LOGIN'} />
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
