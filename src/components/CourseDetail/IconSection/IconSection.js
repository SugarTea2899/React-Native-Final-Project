import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, Alert, Share } from "react-native";
import {
  initContentList,
  resetDownloadProcess,
  updateDownloadProcess,
  updateRegister,
} from "../../../actions/CourseActions";
import { fetchWithAu, fetchWithAuV2 } from "../../../api/fetchData";
import { CourseContext } from "../../../contexts/CourseContext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { UserContext } from "../../../contexts/UserContext";
import { API_URL } from "../../../globals/constants";
import * as FileSystem from "expo-file-system";

import IconButton from "../../Common/IconButton/IconButton";
const IconSection = ({ courseId, register }) => {
  const [like, setLike] = useState(false);
  const { token, setLoading } = useContext(UserContext);
  const { dispatch, state } = useContext(CourseContext);
  const { languageConstant } = useContext(LanguageContext);
  useEffect(() => {
    if (token !== null) {
      setLoading(true);
      fetchWithAu(
        API_URL + `user/get-course-like-status/${courseId}`,
        "GET",
        token
      ).then(
        (data) => {
          setLoading(false);
          setLike(data.likeStatus);
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
        }
      );
    }
  }, []);
  const handleLikeCourse = () => {
    if (token === null) {
      Alert.alert("Error", "You must login to do this action.");
      return;
    }

    setLoading(true);
    fetchWithAu(API_URL + `user/like-course`, "POST", token, {
      courseId: courseId,
    }).then(
      (data) => {
        setLoading(false);
        setLike(data.likeStatus);
      },
      (error) => {
        setLoading(false);
        console.log(error.message);
      }
    );
  };

  const handleRegisterCourse = () => {
    if (token === null) {
      Alert.alert("Error", "You must login to do this action");
      return;
    }

    if (register) {
      Alert.alert("Error", "You have already registerd this course");
      return;
    }

    Alert.alert(
      "Confirm",
      "Do you want to register this course?",
      [
        {
          text: "Yes",
          onPress: () => {
            setLoading(true);
            fetchWithAuV2(API_URL + "payment/get-free-courses", "POST", token, {
              courseId: courseId,
            }).then(
              (data) => {
                setLoading(false);
                Alert.alert("Success", "Register course successfully.");
                dispatch(updateRegister(true));
              },
              (erro) => {
                setLoading(false);
                Alert.alert("Error", erro.message);
              }
            );
          },
        },
        {
          text: "No",
          onPress: () => {},
        },
      ],
      { cancelable: false }
    );
  };

  const handleDownloadCourse = async () => {
    if (state.video.includes("youtube")) {
      alert("You cannot download Youtube videos.");
      return;
    }
    let filename = `${state.course.title}`;
    if (state.activeIndex.i != -1) {
      filename += ` ${state.contentList[state.activeIndex.i].name}`;
    }

    if (state.activeIndex.j != -1) {
      filename += ` ${
        state.contentList[state.activeIndex.i].data[state.activeIndex.j].name
      }`;
    }
    filename = filename.replace(/ /g, "-");
    //check file existed
    const isExisted = await checkFile(filename);
    if (isExisted) {
      alert("This video is downloaded");
      return;
    }
    //--------

    //update process download
    const callback = (downloadProgress) => {
      const progress =
        (downloadProgress.totalBytesWritten /
          downloadProgress.totalBytesExpectedToWrite) *
        100;

      if (progress < 25) {
        dispatch(updateDownloadProcess({ borderWidth: 2 }));
      }

      if (progress >= 25) {
        dispatch(updateDownloadProcess({ borderTopColor: "dodgerblue" }));
      }

      if (progress >= 50) {
        dispatch(updateDownloadProcess({ borderRightColor: "dodgerblue" }));
      }

      if (progress >= 75) {
        dispatch(updateDownloadProcess({ borderBottomColor: "dodgerblue" }));
      }

      if (progress >= 100) {
        dispatch(updateDownloadProcess({ borderLeftColor: "dodgerblue" }));
      }
    };

    const downloadResumable = FileSystem.createDownloadResumable(
      state.video,
      FileSystem.documentDirectory + filename + ".mp4",
      {},
      callback
    );
    //-------

    try {
      const { uri } = await downloadResumable.downloadAsync();
      dispatch(resetDownloadProcess());
    } catch (error) {
      console.log(error.message);
    }
  };

  //file name include extension
  const checkFile = async (filename) => {
    const res = await FileSystem.getInfoAsync(
      FileSystem.documentDirectory + filename + ".mp4"
    );
    return res.exists;
  };

  const handleShare = async () => {
    try {
      const message = `${state.course.title}\nhttp://dev.letstudy.org/course-detail/${state.course.id}`
      const result = await Share.share({
        message: message
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      {like ? (
        <IconButton
          onClick={handleLikeCourse}
          name="heart"
          content={languageConstant.UNLIKE}
        />
      ) : (
        <IconButton
          onClick={handleLikeCourse}
          name="hearto"
          content={languageConstant.LIKE}
        />
      )}
      <IconButton
        onClick={handleRegisterCourse}
        name="plus"
        content={
          register ? languageConstant.REGISTERED : languageConstant.REGISTER
        }
      />
      <IconButton
        onClick={handleDownloadCourse}
        name="download"
        content={languageConstant.DOWNLOAD}
        style={state.processDownload}
      />
      <IconButton
        onClick={handleShare}
        name="sharealt"
        content={languageConstant.SHARE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 28,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default IconSection;
