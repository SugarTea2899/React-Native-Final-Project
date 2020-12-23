import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';


const TextArea = ({style, content}) => {
    return (
        <View style={[styles.container, style]}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>
                    {content}
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
        maxHeight: 85
    },
    text: {
        color: 'white',
    },
});

export default TextArea;