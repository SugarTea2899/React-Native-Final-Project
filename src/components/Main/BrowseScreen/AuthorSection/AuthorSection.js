import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import AuthorItem from './AuthorItem/AuthorItem';

const AuthorSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Top authors</Text>
            <ScrollView horizontal={true}>
                <AuthorItem />
                <AuthorItem />
                <AuthorItem />
                <AuthorItem />
                <AuthorItem />
                <AuthorItem />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 40,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        marginBottom: 15
    }
});

export default AuthorSection;

