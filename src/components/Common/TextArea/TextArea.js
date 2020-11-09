import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';


const TextArea = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>
                    A front-end web developer is responsible for implement visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.
                </Text>
            </ScrollView>              
        </View>
      
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,
    },
    scrollView: {
        height: 85,
    },
    text: {
        color: 'white',
    },
});

export default TextArea;