import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderRight from "../../components/Other/HeaderRight/HeaderRight";
import HomeScreen from "../../components/Main/HomeScreen/HomeScreen";
import Profile from "../../components/AccountManagement/Profile/Profile";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import PathDetail from "../../components/PathDetail/PathDetail";
import Login from "../../components/Authentication/Login/Login";
import Register from "../../components/Authentication/Register/Register";
import ListCourse from "../../components/Courses/ListCourse";
import ListPaths from "../../components/Paths/ListPaths/ListPaths";
import SkillDetail from "../../components/SkillDetail/SkillDetail";
import ForgotPassword from "../../components/Authentication/ForgotPassword/ForgotPassword";
import Setting from "../../components/AccountManagement/Setting/Setting";
import {
  CHANGE_PASSWORD,
  COURSE_DETAIL,
  EDIT_INFO_SCREEN,
  FORGOT_PASSWORD,
  HOME,
  LIST_COURSE,
  LIST_PATH,
  LOGIN,
  PATH_DETAIL,
  PROFILE,
  REGISTER,
  SETTING,
  SKILL_DETAIL,
} from "../../globals/KeyScreen";
import UpdateForm from "../../components/AccountManagement/UpdateForm/UpdateForm";
import ChangePasswordForm from "../../components/AccountManagement/ChangePasswordForm/ChangePasswordForm";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import RegisteredList from "../../components/Main/HomeScreen/RegisteredList/RegisteredList";
const Stack = createStackNavigator();

const HomeStack = () => {
  const { languageConstant } = useContext(LanguageContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={languageConstant.HOME}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => <HeaderRight navigation={navigation} />,
        })}
      />
      <Stack.Screen name={languageConstant.PROFILE} component={Profile} />
      <Stack.Screen
        name={languageConstant.COURSE_DETAIL}
        component={CourseDetail}
        options={({ route }) => ({
          title: route.params.course.title || route.params.course.courseTitle,
        })}
      />
      <Stack.Screen name={languageConstant.LOGIN} component={Login} />
      <Stack.Screen name={languageConstant.REGISTER} component={Register} />
      <Stack.Screen
        name={languageConstant.LIST_COURSE}
        component={ListCourse}
      />
      <Stack.Screen
        name={languageConstant.SKILL_DETAIL}
        component={SkillDetail}
        options={({ route }) => ({
          title: route.params.content,
        })}
      />
      <Stack.Screen
        name={languageConstant.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
      <Stack.Screen name={languageConstant.SETTING} component={Setting} />
      <Stack.Screen
        name={languageConstant.EDIT_INFO_SCREEN}
        component={UpdateForm}
      />
      <Stack.Screen
        name={languageConstant.CHANGE_PASSWORD}
        component={ChangePasswordForm}
      />
      <Stack.Screen
        name={languageConstant.LEARNING_COURSE}
        component={RegisteredList}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
