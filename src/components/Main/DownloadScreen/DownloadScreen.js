import { Video } from "expo-av";
import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListCourse from "../../Courses/ListCourse";
import * as FileSystem from "expo-file-system";
import { useEffect } from "react";
import VideoItem from "./VideoList/Video/VideoItem";
import { useState } from "react";
import VideoModal from "./VideoModal";
import { useIsFocused } from "@react-navigation/native";

const DownloadScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [reload, setReload] = useState(Math.random());
  const isFocused = useIsFocused();
  const [videoModal, setVideoModal] = useState({
    open: false,
    videoUri: null,
  });
  const onCloseVideoModal = () => {
    setVideoModal({
      open: false,
      videoUri: null,
    });
  };
  useEffect(() => {
    if (isFocused) {
      const getVideos = async () => {
        const dir = await FileSystem.readDirectoryAsync(
          FileSystem.documentDirectory
        );
        setVideos(dir.filter((item) => item.includes(".mp4")));
      };
      getVideos();
    }
  }, [reload, isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoItem
            setReload={setReload}
            setVideoModal={setVideoModal}
            name={item}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
      <VideoModal {...videoModal} onClose={onCloseVideoModal} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DownloadScreen;
