import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { convertToDateTime } from "../../../../globals/util";

const RegisteredItem = ({ course, navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { languageConstant } = useContext(LanguageContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(languageConstant.COURSE_DETAIL, { course: course })}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              course.courseImage,
          }}
        />
        <View style={styles.textGroup}>
          <Text
            numberOfLines={2}
            style={[styles.title, { color: theme.TEXT_COLOR }]}
          >
            {`${course.courseTitle}`}
          </Text>
          <Text style={[styles.otherText, { color: theme.TEXT_COLOR_BLUR }]}>
            {`${course.instructorName}`}
          </Text>
          <Text style={styles.highlightText}>{`Latest: ${convertToDateTime(course.latestLearnTime)}`}</Text>
          <Text style={styles.highlightText}>{`Process: ${course.learnLesson}/${course.total} Lessons`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.7,
    marginLeft: 7,
    marginRight: 7,
  },
  image: {
    height: 80,
    alignSelf: "center",
    flex: 2.5,
    resizeMode: "stretch",
  },
  textGroup: {
    paddingTop: 20,
    paddingLeft: 12,
    flex: 4
  },
  title: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
  otherText: {
    color: "lightgray",
    fontSize: 11,
    marginTop: 2,
  },
  highlightText: {
    color: "deepskyblue",
    fontStyle: "italic",
    fontSize: 13,
    marginTop: 4,
  },
});

export default RegisteredItem;
