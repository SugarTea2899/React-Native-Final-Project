import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';


const AuthorItem = ({author}) => {
    return (
        <View style={styles.container}>
            <Image source={author.image} style={styles.image} />
            <Text style={styles.text}>{author.name}</Text>
        </View>
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
        borderRadius: 50
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    }
});

export default AuthorItem;