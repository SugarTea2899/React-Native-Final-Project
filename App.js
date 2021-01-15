import React, { useState } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import SearchStack from './src/navigators/SearchStack/SearchStack';
import HomeStack from './src/navigators/HomeStack/HomeStack';
import BrowseStack from './src/navigators/BrowseStack/BrowseStack';
import DownloadStack from './src/navigators/DownloadStack/DownloadStack';
import { UserContext } from './src/contexts/UserContext';
import { API_URL, TOKEN_NAME, USER_INFO } from './src/globals/constants';
import { useEffect } from 'react';
import { fetchWithAu } from './src/api/fetchData';
import Loader from './src/components/Common/Loader/Loader';
import { useCallback } from 'react';
import { LanguageContext } from './src/contexts/LanguageContext';
import * as eng from './src/globals/EngConstants';
import * as vni from './src/globals/VNConstants';

const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export default function App() {
  const [user, setUser] = useState({ token: null });
  const [loading, setLoading] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const language = isEnglish ? eng : vni;

  const handleSetUser = (token) => {
    setUser({ token: token })
  }

  const handleSetLoading = (loading) => {
    setLoading(loading);
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_NAME);
      if (token !== null) {
        fetchWithAu(API_URL + 'user/me', 'GET', token)
          .then(
            (data) => {
              handleSetUser(token);
            },
            async (erro) => {
              await SecureStore.deleteItemAsync(TOKEN_NAME);
              handleSetUser(null);
            }
          )

      }

    }
    checkToken();
  }, [])
  return (
    <LanguageContext.Provider value={{languageConstant: isEnglish ? eng : vni, setLanguage: setIsEnglish}} >
      <UserContext.Provider value={{ token: user.token, setContent: handleSetUser, setLoading: handleSetLoading }} >
        <NavigationContainer theme={DarkTheme}>
          <StatusBar backgroundColor={'#121212'} />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                  case language.HOME:
                    iconName = "home";
                    break;
                  case language.DOWNLOAD:
                    iconName = 'download';
                    break;
                  case language.BROWSE:
                    iconName = 'earth';
                    break;
                  case language.SEARCH:
                    iconName = 'search1';
                    break;
                }
                return <AntDesign name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'dodgerblue',
              inactiveTintColor: 'gray'
            }}
          >
            <Tab.Screen name={language.HOME} component={HomeStack} />
            <Tab.Screen name={language.DOWNLOAD} component={DownloadStack} />
            <Tab.Screen name={language.BROWSE} component={BrowseStack} />
            <Tab.Screen name={language.SEARCH} component={SearchStack} />
          </Tab.Navigator>
          <Loader loading={loading} />
        </NavigationContainer>
      </UserContext.Provider>
    </LanguageContext.Provider>


  );
}