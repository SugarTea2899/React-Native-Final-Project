import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const InfoItem = ({title, content, style}) => {
    return (
        <View style={style} >
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.content}>
                {content}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        color: 'gray',
        fontSize: 10
    },
    content: {
        color: 'white',
        fontSize: 18
    }
});

export default InfoItem;