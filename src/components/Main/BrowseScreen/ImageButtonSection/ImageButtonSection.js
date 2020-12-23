import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { fetchWithoutAu } from '../../../../api/fetchData';
import { API_URL, CERTIFICATIONS, CERTIFICATIONS_CONTENT, CONFERENCES, CONFERENCES_CONTENT, DATA_PROFESSIONAL, DATA_PROFESSIONAL_CONTENT, IT_OP, IT_OP_CONTENT, NEW_RELEASE, RECOMEND_FOR_YOU, SERCURITY, SERCURITY_CONTENT, SOFTWARE_DEVELOPMENT, SOFTWARE_DEVELOPMENT_CONTENT, TOP_RATE, TOP_SELL } from '../../../../globals/constants';
import { COURSE_SUGGEST, PATH_SUGGEST } from '../../../../globals/KeyScreen';
import ImageButton from '../../../Common/ImageButton/ImageButton';

const ImageButtonSection = ({ navigation }) => {

    const handleClick = (value) => {
        switch (value) {
            case NEW_RELEASE:
                getNewReleaseCourse();
                break;
            case RECOMEND_FOR_YOU:
                navigation.navigate(COURSE_SUGGEST, { image: image2, content: RECOMEND_FOR_YOU });
                break;
            case CONFERENCES:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: CONFERENCES_CONTENT, contentImage: CONFERENCES });
                break;
            case CERTIFICATIONS:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: CERTIFICATIONS_CONTENT, contentImage: CERTIFICATIONS });
                break;
            case SOFTWARE_DEVELOPMENT:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: SOFTWARE_DEVELOPMENT_CONTENT, contentImage: SOFTWARE_DEVELOPMENT })
                break;
            case IT_OP:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: IT_OP_CONTENT, contentImage: IT_OP });
                break;
            case DATA_PROFESSIONAL:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: DATA_PROFESSIONAL_CONTENT, contentImage: DATA_PROFESSIONAL });
                break;
            case SERCURITY:
                navigation.navigate(PATH_SUGGEST, { image: image1, content: SERCURITY_CONTENT, contentImage: SERCURITY });
                break;
            default:
                return;
        }
    }

    const getNewReleaseCourses = () => {
        fetchWithoutAu(API_URL + 'course/top-new', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    navigation.navigate(COURSE_SUGGEST, { image: image1, content: NEW_RELEASE, courses: newCoures });
                },
                (error) => {
                    console.log(error.message);
                }
            )
    }

    const getTopSellCourses = () => {
        fetchWithoutAu(API_URL + 'course/top-sell', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    navigation.navigate(COURSE_SUGGEST, { image: image2, content: TOP_SELL, courses: newCoures});
                },
                (error) => {
                    console.log(error.message);
                }
            )
    }

    const getTopRateCourse = () => {
        fetchWithoutAu(API_URL + 'course/top-rate', 'POST', { limit: '20', page: '1' })
            .then(
                (data) => {
                    const newCoures = data.payload.map(item => {
                        return {...item, instructorName: item['instructor.user.name']}
                    })
                    navigation.navigate(COURSE_SUGGEST, { image: image2, content: TOP_SELL, courses: newCoures });
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
            <ImageButton style={styles.firstButton} height={100} image={image1} content={NEW_RELEASE} textSize={25} handleClick={getNewReleaseCourses} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={TOP_SELL} textSize={25} handleClick={getTopSellCourses} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={TOP_RATE} textSize={25} handleClick={getTopRateCourse} />
            <ScrollView horizontal={true}>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={CONFERENCES} textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={CERTIFICATIONS} textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={SOFTWARE_DEVELOPMENT} textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={IT_OP} textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={DATA_PROFESSIONAL} textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} handleClick={handleClick} content={SERCURITY} textSize={20} />
                </View>
            </ScrollView>
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