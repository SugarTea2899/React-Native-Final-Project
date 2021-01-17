import { Video } from "expo-av";
import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import MyButton from "../../Common/MyButton/MyButton";

const VideoModal = ({ videoUri, open, onClose = () => {} }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            source={{
              uri: videoUri,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={false}
            isLooping={false}
            useNativeControls
            style={styles.video}
          />
        </View>
        <MyButton handleClick={onClose} text="CLOSE" style={styles.button} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  videoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  video: {
    flex: 1,
    height: 200,
  },
  button: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 36,
    marginTop: 20,
  },
});

export default VideoModal;
