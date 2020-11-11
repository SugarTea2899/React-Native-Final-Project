import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';


const AuthorItem = ({author, style, imageStyle, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Author', {author: author})}>
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
        marginRight: 25
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    }
});

export default AuthorItem;