import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SkillItem from '../../Main/BrowseScreen/SkillSection/SkillItem/SkillItem';
import InfoItem from './InfoItem/InfoItem';
import MyButton from '../../Common/MyButton/MyButton';
import { EDIT_INFO_SCREEN, LOGIN } from '../../../globals/KeyScreen';
import { useReducer } from 'react';
import UserInfoReducer from '../../../reducers/UserInfoReducer';
import { UserInfoContext } from '../../../contexts/UserInfoContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { fetchWithAu, fetchWithoutAu } from '../../../api/fetchData';
import { API_URL } from '../../../globals/constants';
import { initUserCategories, initUserInfo } from '../../../actions/UserInfoActions';
import { convertToDateTime } from '../../../globals/util';

const initalState = {
  userInfo: {
    name: 'N/A',
    favoriteCategories: [],
    email: 'N/A',
    phone: 'N/A',
    createdAt: 'N/A',
    updatedAt: 'N/A'
  },
  userCategories: []
}

const Profile = ({ route, navigation }) => {
  const [state, dispatch] = useReducer(UserInfoReducer, initalState);
  const {token} = useContext(UserContext);
  const handleLogout = () => {
    navigation.navigate(LOGIN);
  }
  const handleEditInfo = () => {
    navigation.navigate(EDIT_INFO_SCREEN);
  }

  useEffect(() => {
    if (token !== null) {
      fetchWithAu(API_URL + 'user/me', 'GET', token)
        .then(
          (data) => {
            dispatch(initUserInfo(data.payload));
          },
          (error) => {
            console.log(error.message);
          }
        )
    }
  }, []);

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
    <UserInfoContext.Provider value={{ dispatch: dispatch }} >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Image style={styles.image} source={{uri: state.userInfo.avatar}} />
            <Text style={styles.name}>{state.userInfo.name}</Text>
          </View>
          <View style={styles.skillSection}>
            <Text style={styles.interests}>Interests</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {state.userCategories.map((item, index) => <SkillItem key={index} navigation={navigation} ticked content={item.name} />)}
            </ScrollView>
          </View>
          <View style={styles.infoSection}>
            <InfoItem title='EMAIL' content={state.userInfo.email} />
            <InfoItem style={{ marginTop: 20 }} title='PHONE NUMBER' content={state.userInfo.phone} />
            <InfoItem style={{ marginTop: 20 }} title='Created At' content={convertToDateTime(state.userInfo.createdAt)} />
            <InfoItem style={{ marginTop: 20 }} title='Updated At' content={convertToDateTime(state.userInfo.updatedAt)} />
          </View>
          {token !== null &&  <MyButton handleClick={handleEditInfo} style={styles.button} text={'UPDATE INFORMATION'} />}
          <MyButton handleClick={handleLogout} style={styles.button} text={'LOGOUT'} />
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
    borderStyle: 'solid',
    borderWidth: 2
  }
});

export default Profile;