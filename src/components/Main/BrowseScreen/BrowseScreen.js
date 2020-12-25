import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';
import AuthorSection from './AuthorSection/AuthorSection';
import { LIST_PATH } from '../../../globals/KeyScreen';
import { useState } from 'react';
import { useContext } from 'react';
import decode from 'jwt-decode';
import { UserContext } from '../../../contexts/UserContext';
import { useEffect } from 'react';
import { fetchWithAu, fetchWithoutAu } from '../../../api/fetchData';
import { API_URL } from '../../../globals/constants';
import CourseSection from '../HomeScreen/CourseSection/CourseSection';
import { convertCourse } from '../../../globals/util';
const BrowseScreen = ({navigation}) => {
    const {token, setLoading} = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    const [recommendCourses, setRecommendCourses] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchWithoutAu(API_URL + 'category/all', 'GET')
            .then(
                (data) => {
                    setCategories(data.payload)
                    setLoading(false);
                    
                },
                (error) => {
                    console.log(error.message);
                }
            )

        if (token !== null) {
            setLoading(true);
            const info = decode(token);
            fetchWithAu(API_URL + `user/recommend-course/${info.id}/10/1`, 'GET', token)
                .then(
                    (data) => {
                        const newCourses = data.payload.map(item => convertCourse(item));
                        setRecommendCourses(newCourses);
                        setLoading(false);
                    },
                    (error) => {
                        console.log(error.message);
                        setLoading(false);
                    }
                )
        }    
    }, [])
    return (
        <View style={{ flex: 1, paddingBottom: 20}}>
            <ScrollView>
                <ImageButtonSection navigation={navigation}/>
                <SkillSection navigation={navigation} categories={categories} />
                <CourseSection style={{marginTop: 30}} title='Recommend For You' navigation={navigation} courses={recommendCourses} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default BrowseScreen;