import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { fetchWithoutAu } from '../../api/fetchData';
import { UserContext } from '../../contexts/UserContext';
import { API_URL } from '../../globals/constants';
import { LIST_COURSE, LIST_PATH } from '../../globals/KeyScreen';
import MyButton from '../Common/MyButton/MyButton';
import ListCourse from '../Courses/ListCourse';

const SkillDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const { token, setLoading } = useContext(UserContext);
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    const getData = () => {
      setLoading(true);
      const data = {
        keyword: "",
        opt: {
          category: [
            id
          ]
        },
        limit: 20,
        offset: 1
      }
      fetchWithoutAu(API_URL + 'course/search', 'POST', data)
        .then(
          (data) => {
            const newCoures = data.payload.rows.map(item => {
              return {...item, instructorName: item.name}
            })
            setLoading(false);
            setCourses(newCoures);
          },
          (error) => {
            setLoading(false);
            console.log(error.message);
          }
        )
    }
    getData();
  }, [])
  return (
    <View style={styles.container}>
      <MyButton 
        style={styles.button}
        text={'Follow'}
      />
      <ListCourse navigation={navigation}  courses={courses} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  path: {
    marginTop: 20,
    marginLeft: 10,
  },
  course: {
    marginTop: 40,
    marginLeft: 10,
  },
  author: {
    marginBottom: 20,
    marginLeft: 10,
  },
  button: {
    height: 38,
    backgroundColor: 'dodgerblue',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
},
});

export default SkillDetail;