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
import { CHANGE_PASSWORD, COURSE_DETAIL, DOWNLOAD, EDIT_INFO_SCREEN, FORGOT_PASSWORD, LIST_PATH, LOGIN, PROFILE, REGISTER, SETTING, SKILL_DETAIL } from '../../globals/KeyScreen';
import UpdateForm from '../../components/AccountManagement/UpdateForm/UpdateForm';
import ChangePasswordForm from '../../components/AccountManagement/ChangePasswordForm/ChangePasswordForm';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const Stack = createStackNavigator();

const DownloadStack = () => {
    const {languageConstant} = useContext(LanguageContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={languageConstant.DOWNLOAD}
                component={DownloadScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderRight navigation={navigation} />
                    ),
                })}
            />
            <Stack.Screen
                name={languageConstant.PROFILE}
                component={Profile}
            />
            <Stack.Screen
                name={languageConstant.COURSE_DETAIL}
                component={CourseDetail}
                options={({ route }) => ({
                    title: route.params.course.title || route.params.course.courseTitle
                })}
            />
            <Stack.Screen
                name={languageConstant.LOGIN}
                component={Login}

            />
            <Stack.Screen
                name={languageConstant.REGISTER}
                component={Register}

            />
            <Stack.Screen
                name={languageConstant.SKILL_DETAIL}
                component={SkillDetail}
                options={({ route }) => ({
                    title: route.params.content
                })}
            />
            <Stack.Screen
                name={languageConstant.FORGOT_PASSWORD}
                component={ForgotPassword}

            />
            <Stack.Screen
                name={languageConstant.SETTING}
                component={Setting}
            />
            <Stack.Screen
                name={languageConstant.EDIT_INFO_SCREEN}
                component={UpdateForm}
            />
            <Stack.Screen
                name={languageConstant.CHANGE_PASSWORD}
                component={ChangePasswordForm}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({

});

export default DownloadStack;