import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Modal, Text, TextInput, Alert } from 'react-native';
import { openReviewCourse, reload } from '../../../../actions/CourseActions';
import { fetchWithAu } from '../../../../api/fetchData';
import { CourseContext } from '../../../../contexts/CourseContext';
import { UserContext } from '../../../../contexts/UserContext';
import { API_URL } from '../../../../globals/constants';
import MyButton from '../../../Common/MyButton/MyButton';
import Stars from '../../../Common/Stars/Stars';


const ReviewModal = ({ open, courseId }) => {
  const [formality, setFormality] = useState(0);
  const [content, setContent] = useState(0);
  const [presentation, setPresentation] = useState(0);
  const [value, setValue] = useState('');
  const { dispatch } = useContext(CourseContext);
  const {token ,setLoading} = useContext(UserContext);

  const handleSetFormality = (i) => setFormality(i);
  const handleSetContent = (i) => setContent(i);
  const handlePresentation = (i) => setPresentation(i);
  const handleSubmit = () => {
    setLoading(true);
    const data = {
      courseId,
      formalityPoint: formality,
      contentPoint: content,
      presentationPoint: presentation,
      content: value,
    }
    fetchWithAu(API_URL + 'course/rating-course', 'POST', token, data )
      .then(
        (data) => {
          dispatch(openReviewCourse(false));
          setLoading(false);
          dispatch(reload());
        },
        (error) => {
          setLoading(false);
          dispatch(openReviewCourse(false));
          Alert.alert('Error', error.message);
        }
      )
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.reviewContainer}>
            <Text style={styles.text} >
              {'Formality'}
            </Text>
            <Stars
              style={styles.star}
              maxStar={5}
              curStar={formality}
              starSize={30}
              handleClick={handleSetFormality}
            />
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.text} >
              {'Content'}
            </Text>
            <Stars
              style={styles.star}
              maxStar={5}
              curStar={content}
              starSize={30}
              handleClick={handleSetContent}
            />
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.text} >
              {'Presentation'}
            </Text>
            <Stars
              style={styles.star}
              maxStar={5}
              curStar={presentation}
              starSize={30}
              handleClick={handlePresentation}
            />
          </View>
          <TextInput
            value={value}
            placeholder={'Add your review...'}
            placeholderTextColor={'lightgray'}
            style={styles.textInput}
            textAlignVertical='top'
            multiline
            onChangeText={(text) => setValue(text)}
          />
          <View style={styles.buttonSection}>
            <MyButton
              style={styles.button}
              text='Not Now'
              handleClick={() => dispatch(openReviewCourse(false))}
            />
            <MyButton
              style={styles.button}
              text='Submit'
              handleClick={handleSubmit}
            />
          </View>
        </View>
      </View>


    </Modal>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  content: {
    backgroundColor: 'rgba(66, 66, 66, 1)',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15
  },
  reviewContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  star: {
    marginLeft: 0,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 4,
    width: 90,
  },
  textInput: {
    color: 'white',
    height: 70,
    borderRadius: 10,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 16,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: 'dodgerblue',
    height: 38,
    textAlign: 'center',
    flex: 0.47
  },
});

export default ReviewModal;