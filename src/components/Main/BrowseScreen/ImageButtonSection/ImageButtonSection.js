import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { NEW_RELEASE } from '../../../../globals/constants';
import ImageButton from '../../../Common/ImageButton/ImageButton';

const ImageButtonSection = ({navigation}) => {
    const handleClick = (value) => {
        switch (value){
            case NEW_RELEASE:
                navigation.navigate('New Release');
                break;
            default:
                return;
        }
    }

    const image1 = require('../../../../../assets/background_1.jpg');
    const image2 = require('../../../../../assets/background_2.jpg');
    return (
        <>
            <ImageButton style={styles.firstButton} height={100} image={image1} content="NEW RELASE" textSize={25} value={NEW_RELEASE} handleClick={handleClick} />
            <ImageButton style={styles.secondButton} height={100} image={image2} content={"RECOMMENDED\nFOR YOU"} textSize={25} />
            <ScrollView horizontal={true}>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} content="CONFERENCES" textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} content="CERTIFICATIONS" textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} content={"<Software>\nDEVELOPMENT"} textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} content={"IT OPS"} textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={image1} content="DATA PROFESSIONAL" textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={image1} content="SERCURITY" textSize={20} />
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