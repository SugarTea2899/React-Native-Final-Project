import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList, Alert } from 'react-native';
import CourseInfoSection from './CourseInfoSection/CourseInfoSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import IconSection from './IconSection/IconSection';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContentList from './ContentList/ContentList';
import { Video } from 'expo-av';
import { useReducer } from 'react';
import CourseReducer from '../../reducers/CourseReducer';
import { CourseContext } from '../../contexts/CourseContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { fetchWithAu, fetchWithoutAu } from '../../api/fetchData';
import { API_URL } from '../../globals/constants';
import { initContentList, initCourseInfo, reload, showVideo, updateActiveIndex, updateRegister } from '../../actions/CourseActions';
import ReviewCourse from './ReviewCourse/ReviewCourse';
import ReviewModal from './ReviewCourse/ReviewModal/ReviewModal';
import YoutubePlayer from "react-native-youtube-iframe";
import { useState } from 'react';

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
    },
    formalityPoint: 0,
    contentPoint: 0,
    presentationPoint: 0,
    averagePoint: 0,
  },
  openReviewCourse: false,
  reload: Math.random(),
  video: null,
  activeIndex: { i: -1, j: -1 }
}

const CourseDetail = ({ route, navigation }) => {
  const { course } = route.params;
  const [state, dispatch] = useReducer(CourseReducer, initialState)
  const { token, setLoading } = useContext(UserContext);
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    setLoading(true);
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
          dispatch(showVideo(data.payload.promoVidUrl))
          setLoading(false);
        },
        (erro) => {
          console.log(erro.message);
          setLoading(false);
        }
      )
  }, [state.reload])

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
    <IconSection courseId={course.id} register={state.register} />
    <DescriptionSection content={state.course.description} />
  </React.Fragment>

  const handleSelectLesson = (i, j) => {
    if (!state.register) {
      Alert.alert('Error', 'You must register this coures to see lessons');
      return;
    }

    setLoading(true)
    dispatch(updateActiveIndex({ i, j }));

    fetchWithAu(API_URL + `lesson/video/${state.course.id}/${state.contentList[i].data[j].id}`, 'GET', token)
      .then(
        (data) => {
          dispatch(showVideo(data.payload.videoUrl));
          setLoading(false)
        },
        (error) => {
          console.log(error.message);
          setLoading(false)
        }
      )
  }
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
        fontSize: 15
      }
    }}
  >
    <Tab.Screen name="CONTENT" children={() => <ContentList handleClick={handleSelectLesson} activeIndex={state.activeIndex} data={state.contentList} />} />
    <Tab.Screen name="REVIEW" children={() => <ReviewCourse course={state.course} register={state.register} />} />
  </Tab.Navigator>)

  const renderVideoSection = () => {
    if (state.video && state.video.includes('youtube')) {
      const youtubeId = state.video.split('/').pop();
      return (
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={youtubeId}
        />
      )
    } else {
      return (
        <Video
          source={{ uri: state.video === null ? '' : state.video.replace('https', 'http') }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          style={styles.video}
        />
      )
    }
  }
  return (
    <CourseContext.Provider value={{ dispatch: dispatch }} >
      <View style={styles.container}>
        <View style={styles.videoSection}>
          {renderVideoSection()}
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
      <ReviewModal open={state.openReviewCourse} courseId={state.course.id} />
    </CourseContext.Provider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoSection: {
    height: 200,
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