import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../../../contexts/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as FileSystem from "expo-file-system";

const VideoItem = ({ name, setVideoModal = () => {}, setReload = () => {} }) => {
  const { theme } = useContext(ThemeContext);

  const handlePress = () => {
    setVideoModal({
      open: true,
      videoUri: FileSystem.documentDirectory + name,
    });
  };

  const handleDelete = () => {

    const deleteFile = async () => {
      await FileSystem.deleteAsync(FileSystem.documentDirectory + name);
    }

    Alert.alert('Confirm', 'Are you sure to delete this video', [
      {
        text: 'YES',
        onPress: async () => {
          await deleteFile();
          setReload(Math.random())
        }
      },
      {
        text: 'NO'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 , flexDirection: 'row', alignItems: 'center'}}>
        <Entypo
          name="video"
          size={50}
          color={theme.TEXT_COLOR}
          style={{ flex: 0.5 }}
          onPress={handlePress}
        />
        <Text
          style={{
            color: theme.TEXT_COLOR,
            fontSize: 14,
            marginLeft: 15,
            flex: 2,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{ flex: 0.2, justifyContent: "flex-end", flexDirection: "row" }}
      >
        <AntDesign
          name="delete"
          size={20}
          color={theme.TEXT_COLOR}
          style={{ marginRight: 15 }}
          onPress={handleDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 15,
  },
});

export default VideoItem;
