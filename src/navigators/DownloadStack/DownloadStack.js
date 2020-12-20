import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DownloadScreen from '../../components/Main/DownloadScreen/DownloadScreen'
import HeaderRight from '../../components/Other/HeaderRight/HeaderRight';
import Profile from '../../components/AccountManagement/Profile/Profile';
import CourseDetail from '../../components/CourseDetail/CourseDetail'
import Login from '../../components/Authentication/Login/Login';
import Register from '../../components/Authentication/Register/Register';
import SkillDetail from '../../components/SkillDetail/SkillDetail';
import ForgotPassword from '../../components/Authentication/ForgotPassword/ForgotPassword';
import Setting from '../../components/AccountManagement/Setting/Setting';
import ListPaths from '../../components/Paths/ListPaths/ListPaths';
import { COURSE_DETAIL, DOWNLOAD, EDIT_INFO_SCREEN, FORGOT_PASSWORD, LIST_PATH, LOGIN, PROFILE, REGISTER, SETTING, SKILL_DETAIL } from '../../globals/KeyScreen';
import UpdateForm from '../../components/AccountManagement/UpdateForm/UpdateForm';

const Stack = createStackNavigator();

const DownloadStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={DOWNLOAD}
                component={DownloadScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name={PROFILE}
                component={Profile}
            />
            <Stack.Screen
                name={COURSE_DETAIL}
                component={CourseDetail}
                options={({ route }) => ({
                    title: route.params.course.title
                })}
            />
            <Stack.Screen
                name={LOGIN}
                component={Login}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={REGISTER}
                component={Register}
                options={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={SKILL_DETAIL}
                component={SkillDetail}
                options={({ route }) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name={FORGOT_PASSWORD}
                component={ForgotPassword}
                options={{
                    title: 'Forgot Password',
                    headerStyle: {
                        backgroundColor: '#242424'
                    }
                }}
            />
            <Stack.Screen
                name={LIST_PATH}
                component={ListPaths}
                options={({ route }) => ({
                    title: route.params.title
                })}
            />
            <Stack.Screen
                name={SETTING}
                component={Setting}
            />
            <Stack.Screen
                name={EDIT_INFO_SCREEN}
                component={UpdateForm}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default DownloadStack;