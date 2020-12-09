import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, Text } from 'react-native';
import { fetchWithoutAu } from '../../../api/fetchData';
import { API_URL } from '../../../globals/constants';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleLogin = () => {
        const data = {
            username: username,
            email: email,
            phone: phone,
            password: password
        }
        fetchWithoutAu(API_URL + "user/register", 'POST', data)
            .then(
                (data) => {
                    console.log(data);
                },
                (erro) => {
                    console.log(erro.message);
                }
            )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <MyInput text={username} setText={setUsername} lable={'USERNAME'}/>
                <MyInput text={email} setText={setEmail} style={{marginTop: 30}} lable={'EMAIL'}/>
                <MyInput text={phone} setText={setPhone}  isNumber style={{marginTop: 30}} lable={'PHONE'}/>
                <MyInput text={password} setText={setPassword} isPassWord style={{marginTop: 30}} lable={'PASSWORD'}/>
                <MyInput text={rePassword} setText={setRePassword} isPassWord style={{marginTop: 30}} lable={'RE-PASSWORD'}/>
                <MyButton handleClick={handleLogin} style={styles.button}  text={'SIGN UP'} />
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