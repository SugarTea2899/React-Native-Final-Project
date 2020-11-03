import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ImageButton from '../../../Common/ImageButton/ImageButton';

const ImageButtonSection = () => {
    return (
        <>
            <ImageButton style={styles.firstButton} height={100} image={require('../../../../../assets/background_1.jpg')} content="NEW RELASE" textSize={25} />
            <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_2.jpg')} content={"RECOMMENDED\nFOR YOU"} textSize={25} />
            <ScrollView horizontal={true}>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content="CONFERENCES" textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content="CERTIFICATIONS" textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content={"<Software>\nDEVELOPMENT"} textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content={"IT OPS"} textSize={20} />
                </View>
                <View style={styles.columnButton}>
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content="DATA PROFESSIONAL" textSize={20} />
                    <ImageButton style={styles.secondButton} height={100} image={require('../../../../../assets/background_1.jpg')} content="SERCURITY" textSize={20} />
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