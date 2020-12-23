import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import CourseInfoSection from './CourseInfoSection/CourseInfoSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import IconSection from './IconSection/IconSection';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContentList from './ContentList/ContentList';
import Transcript from './Transcript/Transcript';
import { Video } from 'expo-av';
import EmptyContent from './EmptyContent/EmptyContent';
import { useReducer } from 'react';
import CourseReducer from '../../reducers/CourseReducer';
import { CourseContext } from '../../contexts/CourseContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import { fetchWithAu, fetchWithoutAu } from '../../api/fetchData';
import { API_URL } from '../../globals/constants';
import { initContentList, initCourseInfo, updateRegister } from '../../actions/CourseActions';

const Tab = createMaterialTopTabNavigator();

const initialState = {
  contentList: [],
  register: false,
  course: {
    title: '',
    price: 0,
    description: '',
    totalHours: 0,
    promoVidUrl: '',
    instructor: {
      name: ''
    }
  }
}

const CourseDetail = ({ route, navigation }) => {
  const { course } = route.params;
  const [state, dispatch] = useReducer(CourseReducer, initialState)
  const { token } = useContext(UserContext);
  useEffect(() => {
    fetchWithoutAu(API_URL + `course/get-course-detail/${course.id}/null`)
      .then(
        (data) => {
          const section = data.payload.section;
          const formatSection = section.map((item) => {
            const formatItem = { ...item, data: item.lesson.slice() }
            delete formatItem.lesson;
            return formatItem;
          });
          dispatch(initContentList(formatSection));
          dispatch(initCourseInfo(data.payload));
        },
        (erro) => {
          console.log(erro.message);
        }
      )
  }, [])

  useEffect(() => {
    if (token !== null) {
      fetchWithAu(API_URL + `user/check-own-course/${course.id}`, 'GET', token)
        .then(
          (data) => {
            dispatch(updateRegister(data.payload.isUserOwnCourse));
          },
          (erro) => {
            console.log(erro.message);
          }
        )
    }
  }, []);


  const header = <React.Fragment>
    <CourseInfoSection navigation={navigation} course={state.course} />
    <IconSection courseId={course.id} />
    <DescriptionSection content={state.course.description} />
  </React.Fragment>

  const content = (<Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#262525',
        marginTop: 10
      },
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 16
      }
    }}
  >
    <Tab.Screen name="CONTENT" children={() => <ContentList data={state.contentList} />} />
    <Tab.Screen name="TRANSCRIPT" component={Transcript} />
  </Tab.Navigator>)

  return (
    <CourseContext.Provider value={{ dispatch: dispatch }} >
      <View style={styles.container}>
        <View style={styles.videoSection}>
          <Video
            source={{ uri: state.course.promoVidUrl === null ? '' : state.course.promoVidUrl.replace('https', 'http') }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={false}
            isLooping
            useNativeControls
            style={styles.video}
          />
        </View>

        <View style={styles.contentSection}>
          <FlatList
            ListHeaderComponent={header}
            data={[1]}
            renderItem={({ item }) => content}
            keyExtractor={(item) => `${item}`}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </CourseContext.Provider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoSection: {
    flex: 1,
    flexDirection: 'row'
  },
  contentSection: {
    flex: 2,
    backgroundColor: "#262525",
  },
  video: {
    flex: 1,
    height: 'auto',
    resizeMode: 'stretch',
  }
});

export default CourseDetail;