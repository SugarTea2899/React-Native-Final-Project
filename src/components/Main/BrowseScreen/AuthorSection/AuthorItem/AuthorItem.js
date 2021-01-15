import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../../../contexts/ThemeContext';
import { AUTHOR } from '../../../../../globals/KeyScreen';


const AuthorItem = ({ author, style, imageStyle, navigation }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View style={[styles.container, style]}>
            <Image source={{uri: author.avatar}} style={[styles.image, imageStyle]} />
            <Text style={[styles.text, {color: theme.TEXT_COLOR}]}>{author.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 140,
        marginRight: 17
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center'
    },
    text: {
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17
    }
});

export default AuthorItem;