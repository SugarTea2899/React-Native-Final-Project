import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { COURSE_DETAIL } from '../../../../globals/KeyScreen';
import { convertToDateTime } from '../../../../globals/util';


const RegisterdCourse = ({ course, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(COURSE_DETAIL, { course: course })}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: course.courseImage }} />
        <View style={styles.textGroup}>
          <Text style={styles.title}>{course.courseTitle}</Text>
          <Text style={styles.otherText} >{course.instructorName}</Text>
          <Text style={styles.highlightText} >{`Latest: ${convertToDateTime(course.latestLearnTime)}`}</Text>
          <Text style={styles.highlightText} >{`Process: ${course.process}/${course.total}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 235,
    width: 230,
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