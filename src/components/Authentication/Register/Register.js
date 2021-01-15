import React, { useState } from 'react';
import { useContext } from 'react';
import {View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { fetchWithoutAu } from '../../../api/fetchData';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { UserContext } from '../../../contexts/UserContext';
import { API_URL } from '../../../globals/constants';
import { LOGIN } from '../../../globals/KeyScreen';
import AsyncAlert from '../../Common/AsyncAlert/AsyncAlert';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';

const Register = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const {setLoading} = useContext(UserContext);
    const {languageConstant} = useContext(LanguageContext);

    const validEmail = () => {
        const pattern =/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }
    const validPassword = () => {
        return password.length >= 6 && password === rePassword;
    }
    const validPhone = () => {
        return phone.length >= 6;
    }
    
    const handleLogin = () => {
        if (!validEmail(email)){
            Alert.alert('Erro', 'Email is invalid');
            return;
        }

        if (!validPassword(password)){
            Alert.alert('Erro', 'Password must have at least 6 characters and match with RE-PASSWORD');
            return;
        }

        if (!validPhone(phone)){
            Alert.alert('Erro', 'Phone number is invalid');
            return;
        }

        const data = {
            username: username,
            email: email,
            phone: phone,
            password: password
        }
        setLoading(true);
        fetchWithoutAu(API_URL + "user/register", 'POST', data)
            .then(
                async (data) => {
                    setLoading(false);
                    await AsyncAlert('Success', 'Sign up successfully\nYou will redirect to login.');
                    navigation.navigate(languageConstant.LOGIN);
                },
                (erro) => {
                    setLoading(false);
                    Alert.alert('Erro', erro.message);
                }
            )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{languageConstant.REGISTER}</Text>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <MyInput text={username} setText={setUsername} lable={languageConstant.USER_NAME.toUpperCase()}/>
                <MyInput text={email} setText={setEmail} style={{marginTop: 30}} lable={'EMAIL'}/>
                <MyInput text={phone} setText={setPhone}  isNumber style={{marginTop: 30}} lable={languageConstant.PHONE_NUMBER.toUpperCase()}/>
                <MyInput text={password} setText={setPassword} isPassWord style={{marginTop: 30}} lable={languageConstant.PASSWORD.toUpperCase()}/>
                <MyInput text={rePassword} setText={setRePassword} isPassWord style={{marginTop: 30}} lable={languageConstant.RE_PASSWORD.toUpperCase()}/>
                <MyButton handleClick={handleLogin} style={styles.button}  text={languageConstant.REGISTER.toUpperCase()} />
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