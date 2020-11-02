import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';


const AuthorItem = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../../../../assets/author1.jpg')} style={styles.image} />
            <Text style={styles.text}>Simon Allardice</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 140,
        marginRight: 20
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