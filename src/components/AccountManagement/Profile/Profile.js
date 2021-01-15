import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Alert, YellowBox, LogBox } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SkillItem from '../../Main/BrowseScreen/SkillSection/SkillItem/SkillItem';
import InfoItem from './InfoItem/InfoItem';
import MyButton from '../../Common/MyButton/MyButton';
import { CHANGE_PASSWORD, EDIT_INFO_SCREEN, HOME, LOGIN } from '../../../globals/KeyScreen';
import { useReducer } from 'react';
import UserInfoReducer from '../../../reducers/UserInfoReducer';
import { UserInfoContext } from '../../../contexts/UserInfoContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { fetchWithAu, fetchWithoutAu } from '../../../api/fetchData';
import { API_URL, TOKEN_NAME } from '../../../globals/constants';
import { initUserCategories, initUserInfo } from '../../../actions/UserInfoActions';
import { convertToDateTime } from '../../../globals/util';
import * as SecureStore from 'expo-secure-store';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

const initalState = {
  userInfo: {
    id: null,
    name: 'N/A',
    favoriteCategories: [],
    email: 'N/A',
    phone: 'N/A',
    createdAt: 'N/A',
    updatedAt: 'N/A',
    avatar: 'http://lh3.googleusercontent.com/proxy/UHY_fKWgsC8byTsnG0A5C1SI3Vnb2IihMIlG-ss9bbfKPp-95Alj6_A-bva88bAsqEVhFfewxaHCgTqnP3kTA2TUs9bdHEBswytvaLZQxhYhdkS9ewjIpcJE874HnPGracIdaMt6ccCwR1zx'
  },
  userCategories: [],
  reload: Math.random()
}

const Profile = ({ route, navigation }) => {
  const [state, dispatch] = useReducer(UserInfoReducer, initalState);
  const {token, setContent, setLoading} = useContext(UserContext);
  const {languageConstant} = useContext(LanguageContext);
  const {theme} = useContext(ThemeContext);

  const handleLogin = () => {
    navigation.navigate(languageConstant.LOGIN);
  }
  const handleLogout = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to logout?',
      [
        {
          text: 'YES',
          onPress: async () => {
            setContent(null);
            await SecureStore.deleteItemAsync(TOKEN_NAME);
            navigation.navigate(languageConstant.HOME);
          }
        },
        {
          text: 'NO',
          onPress: () => {}
        }
      ]
    )
  }
  const handleEditInfo = () => {
    navigation.navigate(languageConstant.EDIT_INFO_SCREEN, {userInfo: state.userInfo, dispatch: dispatch});
  }

  useEffect(() => {
    if (token !== null) {
      setLoading(true);
      fetchWithAu(API_URL + 'user/me', 'GET', token)
        .then(
          (data) => {
            dispatch(initUserInfo(data.payload));
            setLoading(false);
          },
          (error) => {
            console.log(error.message);
            setLoading(false);
          }
        )
    }
  }, [state.reload]);

  useEffect(() => {
    if (state.userInfo.favoriteCategories.length > 0){
      fetchWithoutAu(API_URL + 'category/all', 'GET')
          .then(
            (data) => {
              const filterCategories = data.payload.filter(item => state.userInfo.favoriteCategories.includes(item.id))
              dispatch(initUserCategories(filterCategories));
            },
            (erro) => {
              console.log(erro.message);
            }
          )
    }
  }, [state.userInfo])
  return (
    <UserInfoContext.Provider value={{ dispatch: dispatch, state: state }} >
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Image style={[styles.image, {borderColor: theme.TEXT_COLOR} ]} source={{uri: state.userInfo.avatar}} />
            <Text style={[styles.name, {color: theme.TEXT_COLOR}]}>{state.userInfo.name}</Text>
          </View>
          <View style={styles.skillSection}>
            <Text style={[styles.interests, {color: theme.TEXT_COLOR}]}>{languageConstant.INTERESTS}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {state.userCategories.map((item, index) => <SkillItem id={item.id} key={index} navigation={navigation} ticked content={item.name} />)}
            </ScrollView>
          </View>
          <View style={styles.infoSection}>
            <InfoItem title='EMAIL' content={state.userInfo.email} />
            <InfoItem style={{ marginTop: 20 }} title={languageConstant.PHONE_NUMBER} content={state.userInfo.phone} />
            <InfoItem style={{ marginTop: 20 }} title={languageConstant.CREATED_AT} content={convertToDateTime(state.userInfo.createdAt)} />
            <InfoItem style={{ marginTop: 20 }} title={languageConstant.UPDATED_AT} content={convertToDateTime(state.userInfo.updatedAt)} />
          </View>
          {token !== null &&  <MyButton handleClick={handleEditInfo} style={styles.button} text={languageConstant.UPDATE_INFO} />}
          {token !== null &&  <MyButton handleClick={() => navigation.navigate(languageConstant.CHANGE_PASSWORD, {state: state})} style={styles.button} text={languageConstant.CHANGE_PASSWORD.toUpperCase()} />}
          {token !== null ?
            <MyButton handleClick={handleLogout} style={styles.button} text={languageConstant.LOGOUT} />
            :
            <MyButton handleClick={handleLogin} style={styles.button} text={languageConstant.LOGIN.toUpperCase()} />
          }
        </View>
      </ScrollView>
    </UserInfoContext.Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 18,
    paddingBottom: 18
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    marginLeft: 15,
    fontSize: 17
  },
  skillSection: {
    marginTop: 20
  },
  interests: {
    color: 'white'
  },
  activity: {
    color: 'white',
    marginTop: 40
  },
  infoSection: {
    marginTop: 30
  },
  button: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 15
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 2
  }
});



export default Profile;