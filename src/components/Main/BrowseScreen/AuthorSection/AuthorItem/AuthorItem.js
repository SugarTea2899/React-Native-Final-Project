import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { AUTHOR } from '../../../../../globals/KeyScreen';


const AuthorItem = ({author, style, imageStyle, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(AUTHOR, {author: author})}>
            <View style={[styles.container, style]}>
                <Image source={author.image} style={[styles.image, imageStyle]} />
                <Text style={styles.text}>{author.name}</Text>
            </View>            
        </TouchableOpacity>

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
    text:{
        marginTop: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    }
});

export default AuthorItem;