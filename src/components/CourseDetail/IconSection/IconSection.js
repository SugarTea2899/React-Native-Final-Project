import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
const IconSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Feather name="bookmark" size={25} color="white" />
                </View>
                <Text style={styles.text}>Bookmark</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Feather name="plus" size={25} color="white" />
                </View> 
                <Text style={styles.text}>Add to Channel</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Feather name="download" size={25} color="white" />
                </View>
                <Text style={styles.text}>Download</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 35
    },
    content:{
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#47484a',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        marginTop: 4,
        fontWeight: 'bold'
    }
});


export default IconSection;