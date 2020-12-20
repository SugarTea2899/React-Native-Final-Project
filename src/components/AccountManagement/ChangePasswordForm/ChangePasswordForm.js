import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';

const ChangePasswordForm = () => {
    return (
        <View style={styles.container}>
            <MyInput isPassWord lable={'PASSWORD'} />
            <MyInput isPassWord style={{ marginTop: 25 }} lable={'NEW PASSWORD'} />
            <MyInput isPassWord style={{ marginTop: 25 }} lable={'CONFIRM PASSWORD'} />
            <MyButton style={styles.button} text='SAVE' />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        marginTop: 30
    }
});

export default ChangePasswordForm;