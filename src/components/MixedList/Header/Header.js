import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const Header = ({title, total}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.total}>{`${total} Results`}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    total: {
        color: 'gray',
        fontSize: 12,
        alignSelf: 'center',
        paddingRight: 10
    }
});

export default Header;