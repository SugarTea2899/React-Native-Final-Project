import { useIsFocused } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { fetchWithAu, fetchWithoutAu } from '../../../api/fetchData';
import { UserContext } from '../../../contexts/UserContext';
import { API_URL } from '../../../globals/constants';
import { LIST_COURSE, LIST_PATH } from '../../../globals/KeyScreen';
import PathSection from '../BrowseScreen/PathSection/PathSection';
import CourseSection from './CourseSection/CourseSection';
import decode from 'jwt-decode';
import { convertCourse } from '../../../globals/util';
import RegisterdCourse from './RegisteredSection/RegisteredCourse';
import RegisterSection from './RegisteredSection/RegisterSection';
import Loader from '../../Common/Loader/Loader';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { ThemeContext } from '../../../contexts/ThemeContext';


const HomeScreen = ({ navigation }) => {
  const { token, setLoading } = useContext(UserContext);
  const {languageConstant} = useContext(LanguageContext);
  const {theme} = useContext(ThemeContext)

  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [coursesByCategories, setCourseByCategories] = useState([])
  const [coursesRegistered, setCoursesRegitered] = useState([]);
  const isFocused = useIsFocused();

  const fetchData = () => {
    if (token !== null && isFocused) {
      const info = decode(token);
      fetchWithAu(API_URL + 'user/get-favorite-courses', 'GET', token)
        .then(
          (data) => {
            setFavoriteCourses(data.payload);
          },
          (erro) => {
            setLoading(false);
            console.log(erro.message);
          }
        )

      fetchWithoutAu(API_URL + 'course/courses-user-favorite-categories', 'POST', { userId: info.id })
        .then(
          (data) => {
            const newCoures = data.payload.map(item => convertCourse(item));
            setCourseByCategories(newCoures)
          },
          (erro) => {
            setLoading(false);
            console.log(erro.message);
          }
        )

      fetchWithAu(API_URL + 'user/get-process-courses', 'GET', token)
        .then(
          (data) => {
            setLoading(false);
            setCoursesRegitered(data.payload);
          },
          (erro) => {
            setLoading(false);
            console.log(erro.message);
          }
        )
    } else {
      if (isFocused)
        setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [])

  useEffect(() => {
    if (isFocused)
      fetchData();
  }, [isFocused])

  return (
    <>
      <View style={{ flex: 1, paddingBottom: 20, justifyContent: token === null ? 'center' : 'flex-start' }}>
        {
          token === null
            ?
            <Text style={[styles.text, {color: theme.TEXT_COLOR} ]}>{languageConstant.REQUIRE_LOGIN}</Text>
            :
            <ScrollView showsVerticalScrollIndicator={false}>
              <CourseSection  courses={favoriteCourses} navigation={navigation} style={{ marginTop: 30 }} title={languageConstant.FAVORITE_COURSES} />
              <CourseSection  courses={coursesByCategories} navigation={navigation} style={{ marginTop: 40 }} title={languageConstant.COURSE_IN_CATEGORY} />
              <RegisterSection courses={coursesRegistered} navigation={navigation} style={{ marginTop: 40 }} title={languageConstant.COURSE_LEARNING} />
            </ScrollView>
        }

      </View>
    </>

  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    paddingLeft: 15,
    paddingRight: 15,
  }
})

export default HomeScreen;