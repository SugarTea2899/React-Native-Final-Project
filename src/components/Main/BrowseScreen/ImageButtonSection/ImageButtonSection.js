import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { CERTIFICATIONS, CERTIFICATIONS_CONTENT, CONFERENCES, CONFERENCES_CONTENT, DATA_PROFESSIONAL, DATA_PROFESSIONAL_CONTENT, IT_OP, IT_OP_CONTENT, NEW_RELEASE, RECOMEND_FOR_YOU, SERCURITY, SERCURITY_CONTENT, SOFTWARE_DEVELOPMENT, SOFTWARE_DEVELOPMENT_CONTENT } from '../../../../globals/constants';
import ImageButton from '../../../Common/ImageButton/ImageButton';

const ImageButtonSection = ({navigation}) => {
    const handleClick = (value) => {
        switch (value){
            case NEW_RELEASE:
                navigation.navigate('Course Suggest', {image: image1, content: NEW_RELEASE});
                break;
            case RECOMEND_FOR_YOU:
                navigation.navigate('Course Suggest', {image: image2, content: RECOMEND_FOR_YOU});
                break;
            case CONFERENCES:
                navigation.navigate('Path Suggest', {image: image1, content: CONFERENCES_CONTENT, contentImage: CONFERENCES});
                break;
            case CERTIFICATIONS:
                navigation.navigate('Path Suggest', {image: image1, content: CERTIFICATIONS_CONTENT, contentImage: CERTIFICATIONS});
                break;
            case SOFTWARE_DEVELOPMENT:
                navigation.navigate('Path Suggest', {image: image1, content: SOFTWARE_DEVELOPMENT_CONTENT, contentImage: SOFTWARE_DEVELOPMENT})
                break;
            case IT_OP:
                navigation.navigate('Path Suggest', {image: image1, content: IT_OP_CONTENT, contentImage: IT_OP});
                break;
            case DATA_PROFESSIONAL:
                navigation.navigate('Path Suggest', {image: image1, content: DATA_PROFESSIONAL_CONTENT, contentImage: DATA_PROFESSIONAL});
                break;
            case SERCURITY:
                navigation.navigate('Path Suggest', {image: image1, content: SERCURITY_CONTENT, contentImage: SERCURITY});
                break;
            default:
                return;
        }
    }

    const image1 = require('../../../../../assets/background_1.jpg');
    const image2 = require('../../../../../assets/background_2.jpg');
    return (
        <>
            <ImageButton style={styles.firstButton} height={100} image={image1} content={NEW_RELEASE} textSize={25} handleClick={handleClick} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={RECOMEND_FOR_YOU} textSize={25} handleClick={handleClick} />
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