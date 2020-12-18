import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import TextArea from '../../Common/TextArea/TextArea';

const DescriptionSection = ({content}) => {
    return (
        <View style={styles.container}>
            <TextArea content={content} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Take a learning check</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View related path & courses</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    button: {
        backgroundColor: '#47484a',
        padding: 10,
        borderRadius: 5,
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    }
});

export default DescriptionSection;