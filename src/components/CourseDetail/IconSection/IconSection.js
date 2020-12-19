import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { initContentList, updateRegister } from '../../../actions/CourseActions';
import { fetchWithAu, fetchWithAuV2 } from '../../../api/fetchData';
import { CourseContext } from '../../../contexts/CourseContext';
import { UserContext } from '../../../contexts/UserContext';
import { API_URL } from '../../../globals/constants';

import IconButton from '../../Common/IconButton/IconButton';
const IconSection = ({ courseId }) => {
  const [like, setLike] = useState(false);
  const { token } = useContext(UserContext);
  const {dispatch} = useContext(CourseContext);
  
  useEffect(() => {
    if (token !== null) {
      fetchWithAu(API_URL + `user/get-course-like-status/${courseId}`, 'GET', token)
        .then(
          (data) => {
            setLike(data.likeStatus);
          },
          (error) => {
            console.log(error.message);
          }
        )
    }
  }, [])
  const handleLikeCourse = () => {
    if (token === null) {
      Alert.alert('Error', 'You must login to do this action.')
      return;
    }


    fetchWithAu(API_URL + `user/like-course`, 'POST', token, { courseId: courseId })
      .then(
        (data) => {
          setLike(data.likeStatus);
        },
        (error) => {
          console.log(error.message);
        }
      )
  }

  const handleRegisterCourse = () => {
    if (token === null) {
      Alert.alert('Error', 'You must login to do this action')
      return;
    }

    Alert.alert(
      'Confirm',
      'Do you want to register this course?',
      [
        {
          text: 'Yes',
          onPress: () => {
            fetchWithAuV2(API_URL + 'payment/get-free-courses', 'POST', token, {courseId: courseId})
              .then(
                (data) => {
                  Alert.alert('Success', 'Register course successfully.');
                  dispatch(updateRegister(true));
                },
                (erro) => {
                  Alert.alert('Error', erro.message);
                }
              )
          }
        },
        {
          text: 'No',
          onPress: () => {
            
          }
        }
      ],
      {cancelable: false}
    )
  }
  return (
    <View style={styles.container}>
      {like ? <IconButton onClick={handleLikeCourse} name="heart" content="Unlike" /> :
        <IconButton onClick={handleLikeCourse} name="hearto" content="Like" />}
      <IconButton onClick={handleRegisterCourse} name="plus" content="Register" />
      <IconButton name="download" content="Download" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 28,
    paddingLeft: 15,
    paddingRight: 15,
  }
});


export default IconSection;