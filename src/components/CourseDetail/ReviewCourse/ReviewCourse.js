import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { openReviewCourse } from '../../../actions/CourseActions';
import { CourseContext } from '../../../contexts/CourseContext';
import { UserContext } from '../../../contexts/UserContext';
import { OPEN_REVIEW_COURSE } from '../../../globals/ActionTypes/CourseType';
import MyButton from '../../Common/MyButton/MyButton';
import Stars from '../../Common/Stars/Stars';
import Review from './Review/Review';
import ReviewModal from './ReviewModal/ReviewModal';


const ReviewCourse = ({ course, register }) => {
  const {dispatch} = useContext(CourseContext);
  const {token} = useContext(UserContext);

  const getReviews = () => {
    if (course.ratings && course.ratings.ratingList)
      return course.ratings.ratingList;
    return [];
  }

  const openReview = () => {
    if (token === null) {
      Alert.alert('Error', 'You must login to review this course.');
      return;
    }

    if (!register) {
      Alert.alert('Error', 'You must register this course to review.');
      return;
    }

    dispatch(openReviewCourse(true));
  }
  return (
    <>
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
          handleClick={openReview}
        />
        {
          getReviews().map(item => <Review key={item.id} style={{ marginBottom: 15 }} review={item} />)
        }
      </View>
    </>

  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
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
    marginTop: 25,
    marginBottom: 25
  },

});

export default ReviewCourse;