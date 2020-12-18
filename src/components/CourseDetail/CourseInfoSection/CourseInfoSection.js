import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CourseInfoSection = ({ course }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={styles.skill}>
          <Text style={styles.skillName}>{course['instructor.user.name']}</Text>
        </View>
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
  }
});

export default CourseInfoSection;