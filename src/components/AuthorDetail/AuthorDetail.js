import React from 'react';
import {View, StyleSheet } from 'react-native';
import ListCourse from '../Courses/ListCourse';
import AuthorHeader from './AuthorHeader/AuthorHeader';


const AuthorDetail = ({route, navigation}) => {
    const {author} = route.params;
    const header = <AuthorHeader author={author}/>
    return (
        <View style={styles.container}>
            <ListCourse navigation={navigation} style={styles.list} hideTotal header={header} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default AuthorDetail;