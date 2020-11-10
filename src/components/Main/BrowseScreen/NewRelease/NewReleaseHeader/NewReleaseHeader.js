import React from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const NewReleaseHeader = ({image, navigation}) => {
    return (
        <View style={styles.container}>     
            <ImageBackground source={image} style={styles.image}>
                <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                    <Ionicons style={styles.backIcon} name="ios-arrow-round-back" size={45} color="white" />
                </TouchableWithoutFeedback>
                <Text style={styles.text}>
                    NEW RELEASE
                </Text>
                <View style={{flex: 1}} />
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5
    },
    image: {
        flex: 1,
        height: 150,
        resizeMode: 'cover',
        flexDirection: 'row',
    },
    text:{
        flex: 3,
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    backIcon: {
        marginTop: 20,
        flex: 1,
        marginLeft: 15
    }
});

export default NewReleaseHeader;
