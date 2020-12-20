import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { reloadProfileScreen } from '../../../actions/UserInfoActions';
import { fetchWithAu } from '../../../api/fetchData';
import { UserContext } from '../../../contexts/UserContext';
import { UserInfoContext } from '../../../contexts/UserInfoContext';
import { API_URL, TOKEN_NAME } from '../../../globals/constants';
import MyButton from '../../Common/MyButton/MyButton';
import MyInput from '../../Common/MyInput/MyInput';
import * as SecureStore from 'expo-secure-store';
import { HOME } from '../../../globals/KeyScreen';


const UpdateForm = ({ route, navigation }) => {
  const { userInfo, dispatch } = route.params;
  const [email, setEmail] = useState(userInfo.email);
  const [name, setName] = useState(userInfo.name === null ? '' : userInfo.name);
  const [phone, setPhone] = useState(userInfo.phone);
  const { token, setContent } = useContext(UserContext);


  const validEmail = () => {
    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }
  const validPhone = () => {
    return phone.length >= 6;
  }
  const handleUpdate = () => {
    if (!validEmail()) {
      Alert.alert('Error', 'Email is invalid.');
      return;
    }

    if (!validPhone()) {
      Alert.alert('Error', 'Phone number is invalid.');
      return;
    }

    if (name.length === 0) {
      Alert.alert('Error', 'Name is empty.');
      return;
    }

    if (email !== userInfo.email || name !== userInfo.name || phone !== userInfo.phone) {
      fetchWithAu(API_URL + 'user/update-profile', 'PUT', token, { phone, name, avatar: userInfo.avatar })
        .then(
          (data) => {
            if (email !== userInfo.email) {
              fetchWithAu(API_URL + 'user/change-user-email', 'PUT', token, {newEmail: email})
                .then(
                  (data) => {
                    Alert.alert(
                      'Success', 
                      'Update user profile successfully.\nEmail has changed. You must active email and re-login to continues.',
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
                    console.log(erro.message);
                  }
                )
            } else {
              Alert.alert(
                'Success',
                'Update user profile successfully.',
                [
                  {
                    text: 'OK',
                    onPress: () => {
                      dispatch(reloadProfileScreen());
                      navigation.goBack();
                    }
                  }
                ]
              );
            }

          },
          (erro) => {
            Alert.alert('Erro', 'Fail to update user profile.');
          }
        )
    } else {
      Alert.alert('Erro', 'Your profile has not changed.');
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: userInfo.avatar }} />
        <MyInput text={email} setText={setEmail} style={{ marginTop: 30 }} lable='EMAIL' />
        <MyInput text={name} setText={setName} style={{ marginTop: 30 }} lable='NAME' />
        <MyInput text={phone} setText={setPhone} style={{ marginTop: 30 }} isNumber lable='PHONE NUMBER' />
        <MyButton handleClick={handleUpdate} style={styles.button} text='Update' />
      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 25
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    marginTop: 30
  }
});

export default UpdateForm;