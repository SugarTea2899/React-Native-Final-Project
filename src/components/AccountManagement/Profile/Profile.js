import React from 'react';
import {View, StyleSheet, Text } from 'react-native';


const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Profile</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Profile;