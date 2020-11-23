import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import AuthorItem from './AuthorItem/AuthorItem';


const authors = [
    {
        id: '1',
        name: 'Simon Allardice',
        image: require('../../../../../assets/authors/author_01.jpg'),
        numCourses: 14        
    },
    {
        id: '2',
        name: 'Samer Buna',
        image: require('../../../../../assets/authors/author_02.jpeg'),
        numCourses: 7            
    },
    {
        id: '3',
        name: 'Cory House',
        image: require('../../../../../assets/authors/author_03.jpg'),
        numCourses: 5            
    },
    {
        id: '4',
        name: 'Peter Kellner',
        image: require('../../../../../assets/authors/author_04.jpg'),
        numCourses: 4            
    },
    {
        id: '5',
        name: 'Roland Guijt',
        image: require('../../../../../assets/authors/author_05.jpg'),
        numCourses: 2            
    },
]


const AuthorSection = ({style, navigation}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>Top authors</Text>
            <ScrollView horizontal={true}>
                {
                    authors.map((item) => <AuthorItem key={item.id} navigation={navigation} author={item} />)
                }
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
        marginBottom: 20
    }
});

export default AuthorSection;

