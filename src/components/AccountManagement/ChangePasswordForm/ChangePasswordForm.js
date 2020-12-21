import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { fetchWithAu } from '../../../api/fetchData';
import { UserContext } from '../../../contexts/UserContext';
import { UserInfoContext } from '../../../contexts/UserInfoContext';
import { API_URL, TOKEN_NAME } from '../../../globals/constants';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';
import * as SecureStore from 'expo-secure-store';
import { HOME } from '../../../globals/KeyScreen';

const ChangePasswordForm = ({ route, navigation }) => {
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const { token, setContent } = useContext(UserContext);
  const { state } = route.params;

  const handleSave = () => {
    if (oldPass.length === 0 || newPass.length === 0 || confirmPass.length === 0) {
      Alert.alert('Error', 'Empty information.');
      return;
    }

    if (newPass !== confirmPass) {
      Alert.alert('Error', 'Password mismatch.');
      return;
    }

    fetchWithAu(API_URL + 'user/change-password', 'POST', token, { id: state.userInfo.id, oldPass: oldPass, newPass: newPass })
      .then(
        (data) => {
          Alert.alert(
            'Success',
            'Password has changed. You must re-login to continues.',
            [
              {
                text: 'OK',
                onPress: async () => {
                  setContent(null);
                  await SecureStore.deleteItemAsync(TOKEN_NAME);
                  navigation.navigate(HOME);
                }
              }
            ]
          )
        },
        (erro) => {
          Alert.alert('Error', erro.message);
        }
      )
  }
  return (
    <View style={styles.container}>
      <MyInput text={oldPass} setText={setOldPass} isPassWord lable={'OLD PASSWORD'} />
      <MyInput text={newPass} setText={setNewPass} isPassWord style={{ marginTop: 25 }} lable={'NEW PASSWORD'} />
      <MyInput text={confirmPass} setText={setConfirmPass} isPassWord style={{ marginTop: 25 }} lable={'CONFIRM PASSWORD'} />
      <MyButton handleClick={handleSave} style={styles.button} text='SAVE' />
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