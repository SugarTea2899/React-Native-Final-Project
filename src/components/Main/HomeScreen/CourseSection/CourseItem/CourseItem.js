import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { COURSE_DETAIL } from '../../../../../globals/KeyScreen';
import { formatMoney, getAverageStar } from '../../../../../globals/util';
import Stars from '../../../../Common/Stars/Stars';

const CourseItem = ({ course, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(COURSE_DETAIL, { course: course })}>
      <View style={styles.container}>
        <Image source={{ uri: course.courseImage }} style={styles.image} />
        <View style={styles.textGroup}>
          <Text style={styles.title}>{course.courseTitle}</Text>
          <View style={{ marginTop: 4 }}>
            <Text style={styles.otherText}>{`${course.instructorName}`}</Text>
            <Text style={styles.price}>
              {`${formatMoney(course.coursePrice)} - (${course.courseSoldNumber})`}
            </Text>
            <View style={{ height: 100 }}>
              <Stars style={{ marginTop: 3, marginLeft: 1 }} maxStar={5} curStar={Math.round(course.courseAveragePoint) > 5 ? 5 : Math.round(course.courseAveragePoint)} starSize={12} />
            </View>

          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 230,
    backgroundColor: '#151c2e',
    marginRight: 20,
    borderRadius: 3
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
  price: {
    color: 'lightgray',
    fontSize: 15,
    marginTop: 4,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'deepskyblue'
  }
});

export default CourseItem;