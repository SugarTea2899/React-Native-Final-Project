import React from 'react';
import { useContext } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const InfoItem = ({title, content, style}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View style={style} >
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={[styles.content, {color: theme.TEXT_COLOR}]}>
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