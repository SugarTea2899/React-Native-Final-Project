import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { formatMoney, getAverageStar } from '../../../globals/util';
import Stars from '../../Common/Stars/Stars';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { LanguageContext } from '../../../contexts/LanguageContext';

const ListCourseItem = ({ course, navigation }) => {
  const {theme} = useContext(ThemeContext);
  const {languageConstant} = useContext(LanguageContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(languageConstant.COURSE_DETAIL, { course: course })}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: course.imageUrl }} />
        <View style={styles.textGroup}>
          <Text numberOfLines={2} style={[styles.title, {color: theme.TEXT_COLOR}]}>
            {course.title}
          </Text>
          <Text style={[styles.otherText, {color: theme.TEXT_COLOR_BLUR}]}>
            {course.instructorName}
          </Text>
          <Text style={[styles.otherText, {color: theme.TEXT_COLOR_BLUR}]}>
            {
              course.totalHours
                ?
                `${new Date(course.updatedAt).toLocaleDateString()}  -  ${course.totalHours.toFixed(2)} hours`
                :
                `${new Date(course.updatedAt).toLocaleDateString()}`
            }
          </Text>
          <Text style={styles.price}>
            {` ${formatMoney(course.price)} - (${course.soldNumber})`}
          </Text>
          <Stars style={{ marginTop: 0, marginLeft: 1 }} maxStar={5} curStar={getAverageStar(course)} starSize={12} ratedNumber={course.ratedNumber} />

        </View>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.7,
    flex: 1,
    marginLeft: 7,
    marginRight: 7,
  },
  image: {
    height: 80,
    alignSelf: 'center',
    flex: 2.5,
    resizeMode: 'stretch',
  },
  textGroup: {
    paddingTop: 28,
    paddingLeft: 12,
    flex: 4
  },
  title: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22
  },
  otherText: {
    color: 'lightgray',
    fontSize: 11,
    marginTop: 2
  },
  price: {
    color: 'lightgray',
    fontSize: 15,
    marginTop: 2,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'deepskyblue'
  },

});


export default ListCourseItem;