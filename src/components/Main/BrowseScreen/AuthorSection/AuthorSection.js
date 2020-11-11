import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import AuthorItem from './AuthorItem/AuthorItem';

const author ={
    name: 'Simon Allardice',
    image: require('../../../../../assets/author1.jpg')
}
const AuthorSection = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>Top authors</Text>
            <ScrollView horizontal={true}>
                <AuthorItem author={author} />
                <AuthorItem author={author}/>
                <AuthorItem author={author}/>
                <AuthorItem author={author}/>
                <AuthorItem author={author}/>
                <AuthorItem author={author}/>
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

