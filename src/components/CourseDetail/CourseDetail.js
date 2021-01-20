import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  Alert,
  StatusBar,
} from "react-native";
import CourseInfoSection from "./CourseInfoSection/CourseInfoSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import IconSection from "./IconSection/IconSection";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContentList from "./ContentList/ContentList";
import { Video } from "expo-av";
import { useReducer } from "react";
import CourseReducer from "../../reducers/CourseReducer";
import { CourseContext } from "../../contexts/CourseContext";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { fetchWithAu, fetchWithoutAu } from "../../api/fetchData";
import { API_URL } from "../../globals/constants";
import {
  initContentList,
  initCourseInfo,
  reload,
  showVideo,
  updateActiveIndex,
  updateRegister,
} from "../../actions/CourseActions";
import ReviewCourse from "./ReviewCourse/ReviewCourse";
import ReviewModal from "./ReviewCourse/ReviewModal/ReviewModal";
import YoutubePlayer from "react-native-youtube-iframe";
import { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useRef } from "react";

const Tab = createMaterialTopTabNavigator();

const initialState = {
  contentList: [],
  register: false,
  course: {
    title: "",
    price: 0,
    description: "",
    totalHours: 0,
    promoVidUrl: "",
    instructor: {
      name: "",
    },
    formalityPoint: 0,
    contentPoint: 0,
    presentationPoint: 0,
    averagePoint: 0,
  },
  openReviewCourse: false,
  reload: Math.random(),
  video: null,
  activeIndex: { i: -1, j: -1 },
  processDownload: {},
};

const CourseDetail = ({ route, navigation }) => {
  const { course } = route.params;
  const [state, dispatch] = useReducer(CourseReducer, initialState);
  const { token, setLoading } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { languageConstant } = useContext(LanguageContext);

  const [playing, setPlaying] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const exVideoRef = useRef(null);
  const activeIndexRef = useRef(null);
  const ytVideoRef = useRef(null);
  const ytCurTime = useRef(0);
  const ytCounter = useRef(null);
  useEffect(() => {
    setLoading(true);
    fetchWithoutAu(API_URL + `course/get-course-detail/${course.id}/null`).then(
      (data) => {
        const section = data.payload.section;
        const formatSection = section.map((item) => {
          const formatItem = { ...item, data: item.lesson.slice() };
          delete formatItem.lesson;
          return formatItem;
        });
        if (!rendered) dispatch(initContentList(formatSection));

        dispatch(initCourseInfo(data.payload));

        if (state.video === null) dispatch(showVideo(data.payload.promoVidUrl));
        setRendered(true);

        if (rendered) setLoading(false);
      },
      (erro) => {
        console.log(erro.message);
        setLoading(false);
      }
    );
  }, [state.reload]);

  //get register status
  useEffect(() => {
    if (token !== null) {
      fetchWithAu(
        API_URL + `user/check-own-course/${course.id}`,
        "GET",
        token
      ).then(
        (data) => {
          dispatch(updateRegister(data.payload.isUserOwnCourse));
        },
        (erro) => {
          console.log(erro.message);
        }
      );
    }

    return () => {
      updateBeforeLeave();
      updateBeforeLeaveYT();

    };
  }, []);

  //get info latest update video
  useEffect(() => {
    if (state.contentList.length > 0 && token !== null && state.register) {
      setLoading(true);
      fetchWithAu(
        API_URL + `course/last-watched-lesson/${course.id}`,
        "GET",
        token
      ).then(
        (data) => {
          for (let i = 0; i < state.contentList.length; i++) {
            for (let j = 0; j < state.contentList[i].data.length; j++) {
              if (state.contentList[i].data[j].id === data.payload.lessonId) {
                activeIndexRef.current = data.payload.lessonId;
                dispatch(updateActiveIndex({ i, j }));
                dispatch(showVideo(data.payload.videoUrl));
                setCurrentTime(data.payload.currentTime);
                setLoading(false);
                break;
              }
            }
          }
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
        }
      );
    } else {
      if (rendered) setLoading(false);
    }
  }, [state.contentList, token, state.register]);

  //seek expo video
  useEffect(() => {
    const seekVideo = async (value) => {
      await exVideoRef.current.setPositionAsync(value);
    };
    if (exVideoRef.current !== null && currentTime !== 0) {
      seekVideo(currentTime);
    }
  }, [exVideoRef, currentTime]);

  //seek youtube video
  useEffect(() => {
    const seekVideo = async (value) => {
      setTimeout(() => {
        ytVideoRef.current.seekTo(value);
      }, 2000);
    };

    if (ytVideoRef.current !== null && currentTime !== 0)
      seekVideo(currentTime / 1000);
  }, [ytVideoRef, currentTime]);

  const header = (
    <React.Fragment>
      <CourseInfoSection navigation={navigation} course={state.course} />
      <IconSection courseId={course.id} register={state.register} />
      <DescriptionSection content={state.course.description} />
    </React.Fragment>
  );

  const handleSelectLesson = (i, j) => {
    if (!state.register) {
      Alert.alert("Error", "You must register this coures to see lessons");
      return;
    }

    setLoading(true);
    activeIndexRef.current = state.contentList[i].data[j].id;
    dispatch(updateActiveIndex({ i, j }));

    fetchWithAu(
      API_URL +
        `lesson/video/${state.course.id}/${state.contentList[i].data[j].id}`,
      "GET",
      token
    ).then(
      (data) => {
        dispatch(showVideo(data.payload.videoUrl));
        setLoading(false);
      },
      (error) => {
        console.log(error.message);
        setLoading(false);
      }
    );
  };
  const content = (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: theme.CONTENT_SECTION_COURSE,
          marginTop: 10,
        },
        activeTintColor: "dodgerblue",
        inactiveTintColor: "gray",
        labelStyle: {
          fontWeight: "bold",
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen
        name={languageConstant.LESSON}
        children={() => (
          <ContentList
            handleClick={handleSelectLesson}
            activeIndex={state.activeIndex}
            data={state.contentList}
          />
        )}
      />
      <Tab.Screen
        name={languageConstant.REVIEW}
        children={() => (
          <ReviewCourse course={state.course} register={state.register} />
        )}
      />
    </Tab.Navigator>
  );

  //expo video end
  const handleLessonEnd = (result) => {
    if (result.didJustFinish && state.activeIndex.i !== -1) {
      fetchWithAu(API_URL + "lesson/update-status", "POST", token, {
        lessonId:
          state.contentList[state.activeIndex.i].data[state.activeIndex.j].id,
      }).then(
        (data) => {},
        (error) => {
          console.log(error.message);
        }
      );
    }
  };

  //youtube video end and playing and paused
  const handleLessonEndYT = async (event) => {
    if (event === "playing") {
      const curTime = await ytVideoRef.current.getCurrentTime();
      ytCurTime.current = curTime;

      ytCounter.current = setInterval(() => {
         ytCurTime.current++;
      }, 1000);
    }

    if (event === "paused") {
      if (ytCounter.current) {
        clearInterval(ytCounter.current);
        ytCounter.current = null;
      }

    }
    if (event === "ended" && state.activeIndex.i !== -1) {
      fetchWithAu(API_URL + "lesson/update-status", "POST", token, {
        lessonId:
          state.contentList[state.activeIndex.i].data[state.activeIndex.j].id,
      }).then(
        (data) => {},
        (error) => {
          console.log(error.message);
        }
      );
    }
  };

  const updateBeforeLeave = async () => {
    if (
      activeIndexRef !== null &&
      token !== null &&
      exVideoRef.current !== null
    ) {
      const infoVideo = await exVideoRef.current.getStatusAsync();
      const data = {
        lessonId: activeIndexRef.current,
        currentTime: infoVideo.positionMillis,
      };
      fetchWithAu(
        API_URL + "lesson/update-current-time-learn-video",
        "PUT",
        token,
        data
      ).then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  };

  const updateBeforeLeaveYT = async () => {
    if (
      activeIndexRef !== null &&
      token !== null &&
      ytVideoRef.current !== null
    ) {
      const data = {
        lessonId: activeIndexRef.current,
        currentTime: ytCurTime.current * 1000,
      };
      fetchWithAu(
        API_URL + "lesson/update-current-time-learn-video",
        "PUT",
        token,
        data
      ).then(
        (data) => {

          console.log(data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  };

  const renderVideoSection = () => {
    if (state.video && state.video.includes("youtube")) {
      const youtubeId = state.video.substring(state.video.length - 11);
      return (
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={youtubeId}
          ref={ytVideoRef}
          onChangeState={handleLessonEndYT}
        />
      );
    } else {
      if (state.video !== null) {
        return (
          <Video
            source={{
              uri:
                state.video === null
                  ? "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                  : state.video.replace("https", "http"),
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={false}
            isLooping={false}
            useNativeControls
            style={styles.video}
            ref={exVideoRef}
            onPlaybackStatusUpdate={(result) => handleLessonEnd(result)}
          />
        );
      }
    }
  };

  return (
    <CourseContext.Provider value={{ dispatch: dispatch, state: state }}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.videoSection}>{renderVideoSection()}</View>
        <View
          style={[
            styles.contentSection,
            { backgroundColor: theme.CONTENT_SECTION_COURSE },
          ]}
        >
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    resizeMode: "stretch",
  },
});

export default CourseDetail;
