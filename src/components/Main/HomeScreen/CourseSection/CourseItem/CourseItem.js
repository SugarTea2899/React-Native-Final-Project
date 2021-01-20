import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { LanguageContext } from '../../../../../contexts/LanguageContext';
import { ThemeContext } from '../../../../../contexts/ThemeContext';
import { COURSE_DETAIL } from '../../../../../globals/KeyScreen';
import { formatMoney, getAverageStar } from '../../../../../globals/util';
import Stars from '../../../../Common/Stars/Stars';

const CourseItem = ({ course, navigation }) => {
  const {theme} = useContext(ThemeContext);
  const {languageConstant} = useContext(LanguageContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(languageConstant.COURSE_DETAIL, { course: course })}>
      <View style={[styles.container, {backgroundColor: theme.COURSE_FOOTER}]}>
        <Image source={{ uri: course.courseImage }} style={styles.image} />
        <View style={styles.textGroup}>
          <Text numberOfLines={2} style={[styles.title, {color: theme.TEXT_COLOR}]}>{course.courseTitle}</Text>
          <View style={{ marginTop: 4 }}>
            <Text style={[styles.otherText,{color: theme.TEXT_COLOR_BLUR} ]}>{`${course.instructorName}`}</Text>
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
    width: 200,
    backgroundColor: '#bdbdbd',
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