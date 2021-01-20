import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { LanguageContext } from '../../../../contexts/LanguageContext';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { COURSE_DETAIL } from '../../../../globals/KeyScreen';
import { convertToDateTime } from '../../../../globals/util';


const RegisterdCourse = ({ course, navigation }) => {
  const {languageConstant} = useContext(LanguageContext);
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(languageConstant.COURSE_DETAIL, { course: course })}>
      <View style={[styles.container, {backgroundColor: theme.COURSE_FOOTER}]}>
        <Image style={styles.image} source={{ uri: course.courseImage }} />
        <View style={styles.textGroup}>
          <Text numberOfLines={2} style={[styles.title, {color: theme.TEXT_COLOR}]}>{course.courseTitle}</Text>
          <Text style={[styles.otherText, {color: theme.TEXT_COLOR_BLUR}]} >{course.instructorName}</Text>
          <Text style={styles.highlightText} >{`Latest: ${convertToDateTime(course.latestLearnTime)}`}</Text>
          <Text style={styles.highlightText} >{`Process: ${course.learnLesson}/${course.total} Lessons`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 235,
    width: 200,
    backgroundColor: '#151c2e',
    borderRadius: 3,
    marginRight: 20,
  },
  image: {
    height: 120,
    width: 'auto',
    resizeMode: 'stretch',
  },
  textGroup: {
    paddingLeft: 10,
    paddingTop: 8,
    paddingRight: 10,
  },
  title: {
    color: 'white',
    lineHeight: 22,
    fontSize: 16
  },
  otherText: {
    color: 'lightgray',
    fontSize: 11,
    marginTop: 2
  },
  highlightText: {
    color: 'deepskyblue',
    fontStyle: 'italic',
    fontSize: 13,
    marginTop: 4,
  }
});

export default RegisterdCourse;