import React from "react";
import { useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import RegisterdCourse from "./RegisteredCourse";

const RegisterSection = ({ title, style, navigation, courses }) => {
  const { theme } = useContext(ThemeContext);
  const { languageConstant } = useContext(LanguageContext);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textGroup}>
        <Text style={[styles.title, { color: theme.TEXT_COLOR }]}>{title}</Text>
        <Text
          onPress={() =>
            navigation.navigate(languageConstant.LEARNING_COURSE, {
              courses: courses,
            })
          }
          style={[styles.seeALL, { color: theme.TEXT_COLOR }]}
        >
          {languageConstant.SEE_ALL}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {courses &&
          courses
            .filter((item, index) => index < 4)
            .map((item, index) => (
              <RegisterdCourse
                key={item.id}
                navigation={navigation}
                course={item}
              />
            ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  textGroup: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeALL: {
    color: "ghostwhite",
    fontStyle: "italic",
    paddingRight: 10,
    paddingTop: 5,
  },
  emptyText: {
    width: 0,
    height: 0,
  },
});

export default RegisterSection;
