import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import TextArea from '../../Common/TextArea/TextArea';
import ListPathItem from '../../Paths/ListPathItem/ListPathItem';


const HeaderPath = ({path}) => {
    return (
        <>
            <ListPathItem style={styles.path} path={path}/>
            <TextArea style={{marginLeft: 0}} />
            <Text style={styles.progess}>Your Progress: 0%</Text> 
            <Text style={styles.title}>{path.title}</Text>           
        </>
    );
}


const styles = StyleSheet.create({
    path: {
        borderBottomWidth: 0,
        paddingRight: 8,
        marginBottom: 10
    },
    progess: {
        color: 'white',
        marginTop: 30,
        fontSize: 20
    },
    title: {
        color: 'white',
        marginTop: 35,
        fontSize: 15
    },

});

export default HeaderPath;