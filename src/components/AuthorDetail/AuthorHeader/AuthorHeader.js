import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import MyButton from '../../Common/MyButton/MyButton';
import TextArea from '../../Common/TextArea/TextArea';
import AuthorItem from '../../Main/BrowseScreen/AuthorSection/AuthorItem/AuthorItem';
import { AntDesign } from '@expo/vector-icons';

const AuthorHeader = ({author}) => {
    return (
        <View style={styles.container}>
            <AuthorItem style={styles.authorItem} imageStyle={styles.imageStyle} author={author} />
            <Text style={styles.position} >Pluralsight Author</Text>
            <MyButton style={styles.button} text='FOLLOW' />
            <TextArea style={styles.textArea} />
            <View style={styles.linkContainer}>
                <AntDesign name="link" size={20} color="white" />
                <Text style={styles.link}>{'https://simon.com'}</Text>
            </View>
            <View style={styles.groupIcon}>
                <AntDesign name="wifi" size={24} color="white" />
                <AntDesign name="twitter" style={{marginLeft: 30}} size={24} color="white" />
                <AntDesign name="linkedin-square" style={{marginLeft: 30}} size={24} color="white" />
            </View>
            <Text style={styles.course}>Courses</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 18
    },
    authorItem: {
        width: 200,
        height: 100,
        marginRight: 0
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    position: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 2
    },
    button: {
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        marginTop: 16,
    },
    textArea: {
        height: 90,
        marginTop: 20
    },
    linkContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 20
    },
    link:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        marginLeft: 14
    },
    groupIcon: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 25,
    },
    course: {
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 40,
        fontSize: 17
    }
});

export default AuthorHeader;