import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

const DescriptionSection = () => {
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>
                    A front-end web developer is responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.
                </Text>
            </ScrollView>
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
        marginTop: 30
    },
    text: {
        color: 'white',
        paddingBottom: 10
    },
    scrollView: {
        height: 85,
        paddingLeft: 10,
        paddingTop: 2,
        paddingRight: 10,
        borderColor: 'gray',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        paddingBottom: 5
    },
    button: {
        backgroundColor: '#47484a',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
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