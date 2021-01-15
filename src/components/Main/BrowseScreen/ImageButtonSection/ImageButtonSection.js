import React from 'react';
import { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { fetchWithoutAu } from '../../../../api/fetchData';
import { LanguageContext } from '../../../../contexts/LanguageContext';
import { UserContext } from '../../../../contexts/UserContext';
import { API_URL, CERTIFICATIONS, CERTIFICATIONS_CONTENT, CONFERENCES, CONFERENCES_CONTENT, DATA_PROFESSIONAL, DATA_PROFESSIONAL_CONTENT, IT_OP, IT_OP_CONTENT, NEW_RELEASE, RECOMEND_FOR_YOU, SERCURITY, SERCURITY_CONTENT, SOFTWARE_DEVELOPMENT, SOFTWARE_DEVELOPMENT_CONTENT, TOP_RATE, TOP_SELL } from '../../../../globals/constants';
import { COURSE_SUGGEST, PATH_SUGGEST } from '../../../../globals/KeyScreen';
import ImageButton from '../../../Common/ImageButton/ImageButton';

const ImageButtonSection = ({ navigation }) => {
    const {setLoading} = useContext(UserContext);
    const {languageConstant} = useContext(LanguageContext);

    const getNewReleaseCourses = () => {
        setLoading(true);
        fetchWithoutAu(API_URL + 'course/top-new', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    setLoading(false);
                    navigation.navigate(languageConstant.COURSE_SUGGEST, { image: image1, content: languageConstant.NEW_RELEASE, courses: newCoures });
                },
                (error) => {
                    setLoading(false);
                    console.log(error.message);
                }
            )
    }

    const getTopSellCourses = () => {
        setLoading(true);
        fetchWithoutAu(API_URL + 'course/top-sell', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    setLoading(false);
                    navigation.navigate(languageConstant.COURSE_SUGGEST, { image: image2, content: languageConstant.TOP_SELL, courses: newCoures});
                },
                (error) => {
                    setLoading(false);
                    console.log(error.message);
                }
            )
    }

    const getTopRateCourse = () => {
        setLoading(true);
        fetchWithoutAu(API_URL + 'course/top-rate', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    setLoading(false);
                    navigation.navigate(languageConstant.COURSE_SUGGEST, { image: image2, content: languageConstant.TOP_SELL, courses: newCoures });
                },
                (error) => {
                    console.log(error.message);
                }
            )
    }
    const image1 = require('../../../../../assets/background_1.jpg');
    const image2 = require('../../../../../assets/background_2.jpg');
    return (
        <>
            <ImageButton style={styles.firstButton} height={100} image={image1} content={languageConstant.NEW_RELEASE} textSize={25} handleClick={getNewReleaseCourses} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={languageConstant.TOP_SELL} textSize={25} handleClick={getTopSellCourses} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={languageConstant.TOP_RATE} textSize={25} handleClick={getTopRateCourse} />
        </>
    );
}

const styles = StyleSheet.create({
    firstButton: {
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
    },
    secondButton: {
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
    },
    columnButton: {
        width: 200,
        flex: 1,
        flexDirection: 'column'
    }
});

export default ImageButtonSection;