import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CourseInfoSection from './CourseInfoSection/CourseInfoSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import IconSection from './IconSection/IconSection';

const CourseDetail = ({route}) => {
    const {course} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.videoSection}>
                <Image style={styles.image}  source={require('../../../assets/video.png')} />
            </View>
            <View style={styles.contentSection}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CourseInfoSection />
                    <IconSection />
                    <DescriptionSection />
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoSection: {
        flex: 1,
        flexDirection: 'row'
    },
    contentSection: {
        flex: 2,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        backgroundColor: "#262525",
        paddingBottom: 10
    },
    image:{
        flex: 1,
        height: 'auto'
    }
});

export default CourseDetail;