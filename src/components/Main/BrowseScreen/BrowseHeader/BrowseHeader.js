import React from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const BrowseHeader = ({image, navigation, height, content}) => {
    return (
        <View style={[styles.container, {height: height}]}>     
            <ImageBackground source={image} style={styles.image}>
                <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                    <Ionicons style={styles.backIcon} name="ios-arrow-round-back" size={45} color="white" />
                </TouchableWithoutFeedback>
                <Text style={styles.text}>
                    {content}
                </Text>
                <View style={{flex: 1}} />
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'row',
    },
    text:{
        flex: 3,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    backIcon: {
        marginTop: 20,
        flex: 1,
        marginLeft: 15
    }
});

export default BrowseHeader;
