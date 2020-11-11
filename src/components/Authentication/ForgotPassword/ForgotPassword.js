import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';


const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <StatusBar  translucent backgroundColor="transparent"/>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <MyInput  lable={'EMAIL'}/>
                <MyButton style={styles.button} text={'SEND'} />
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
        justifyContent: 'center',
        paddingBottom: 40
    },
    button: {
        backgroundColor: 'dodgerblue',
        marginTop: 40,
    },
});

export default ForgotPassword;