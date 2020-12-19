import  React, { useState } from 'react';
import {  StatusBar } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import SearchStack from './src/navigators/SearchStack/SearchStack';
import HomeStack from './src/navigators/HomeStack/HomeStack';
import BrowseStack from './src/navigators/BrowseStack/BrowseStack';
import DownloadStack from './src/navigators/DownloadStack/DownloadStack';
import { UserContext } from './src/contexts/UserContext';
import { TOKEN_NAME, USER_INFO } from './src/globals/constants';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState({token: null});
  const handleSetUser = (token) => {
    setUser({token: token})
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_NAME);
      if (token !== null)
        handleSetUser(token);
    }
    checkToken();
  }, [])
  return (
    <UserContext.Provider value={{token: user.token, setContent: handleSetUser}} >
      <NavigationContainer theme={DarkTheme}>
        <StatusBar backgroundColor={'#121212'} />     
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name){
                case 'Home':
                  iconName = "home";
                  break;
                case 'Downloads':
                  iconName = 'download';
                  break;
                case 'Browse':
                  iconName = 'earth';
                  break;
                case 'Search':
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
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Downloads" component={DownloadStack} />
          <Tab.Screen name="Browse" component={BrowseStack} />
          <Tab.Screen name="Search" component={SearchStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  );
}