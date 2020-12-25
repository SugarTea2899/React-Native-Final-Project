import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import Stars from '../../Common/Stars/Stars';
import Review from './Review/Review';


const ReviewCourse = ({ course }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <Text style={styles.text} >
          {'Formality'}
        </Text>
        <Stars
          style={styles.star}
          maxStar={5}
          curStar={course.formalityPoint > 5 ? 5 : Math.round(course.formalityPoint)}
          starSize={30}
        />
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.text} >
          {'Content'}
        </Text>
        <Stars
          style={styles.star}
          maxStar={5}
          curStar={course.contentPoint > 5 ? 5 : Math.round(course.contentPoint)}
          starSize={30}
        />
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.text} >
          {'Presentation'}
        </Text>
        <Stars
          style={styles.star}
          maxStar={5}
          curStar={2}
          starSize={30}
          curStar={course.presentationPoint > 5 ? 5 : Math.round(course.presentationPoint)}
        />
      </View>
      <MyButton
        text={'REVIEW'}
        style={styles.button}
      />
      <Review />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 4,
    width: 90,
  },
  reviewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  star: {
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    width: 150,
    marginTop: 25
  },
  listReview: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default ReviewCourse;