import * as React from 'react';
import {  StatusBar } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import DownloadScreen from './src/components/Main/DownloadScreen/DownloadScreen';
import BrowseScreen from './src/components/Main/BrowseScreen/BrowseScreen';
import SearchStack from './src/navigators/SearchStack/SearchStack';
import HomeStack from './src/navigators/HomeStack/HomeStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
        <Tab.Screen name="Downloads" component={DownloadScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Search" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}