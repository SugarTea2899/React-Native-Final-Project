import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AUTHOR } from '../../../globals/KeyScreen';
import { formatMoney } from '../../../globals/util';
import Stars from '../../Common/Stars/Stars';

const CourseInfoSection = ({ course, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { navigation.navigate(AUTHOR, { authorId: course.instructorId }) }}>
          <View style={styles.skill}>
            <Text style={styles.skillName}>{course.instructor.name}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.price}>{` -  ${formatMoney(course.price)}`}</Text>
        <Stars
          style={styles.stars}
          maxStar={5}
          curStar={course.averagePoint > 5 ? 5 : Math.round(course.averagePoint)}
          ratedNumber={course.ratedNumber}
          starSize={12}
        />
      </View>
      <Text style={styles.otherText}>
        {`${new Date(course.createdAt).toLocaleDateString()}  -  ${course.totalHours} hours`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  },
  title: {
    color: 'white',
    lineHeight: 30,
    fontSize: 22,
    paddingLeft: 1
  },
  skill: {
    marginTop: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: 'gray',
    borderRadius: 18,
  },
  skillName: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  otherText: {
    color: 'lightgray',
    fontSize: 11,
    marginTop: 12,
    paddingLeft: 4,
  },
  price: {
    color: 'white',
    marginTop: 12,
    fontWeight: 'bold',
    marginLeft: 5
  },
  stars: {
    marginTop: 10.5,
    marginLeft: 10
  }
});

export default CourseInfoSection;