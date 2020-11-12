import React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import Option from './Option/Option';


const Setting = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Option hideSwit hideHelperText title="Account"/>
                <Option style={{marginTop: 15}} hideSwit hideHelperText title="Subcription"/>
                <Option style={{marginTop: 15}} hideSwit hideHelperText title="Communication Preferences"/>
                <View style={styles.line} />
                <Option style={{marginTop: 20}} hideSwit title="Default caption language" helperText="English" />
                <Option style={{marginTop: 20}} title="Require Wi-Fi for streaming" hideHelperText/>
                <Option style={{marginTop: 20}} title="Require Wi-Fi for downloading" hideHelperText/>
                <Option style={{marginTop: 20}} title="Show quiz at the end of video" hideHelperText/>
                <Option style={{marginTop: 20}} title="Default location" hideSwit helperText="Default location"/>
                <Option style={{marginTop: 20}} title="Recommended content push notificaions" helperText="Receive notificaions about recommended content." />
                <Option style={{marginTop: 20}} title="Reminder to learn notifications" helperText="Schedule the app to remind you to learn to skill up faster and conquer your goals."/>
                <Option style={{marginTop: 20}} title="Captions" hideHelperText hideSwit/>
                <Option style={{marginTop: 20}} title="Notifications" hideHelperText hideSwit/>
                <Option style={{marginTop: 20}} title="Advanced Options" hideHelperText hideSwit/>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    line: {
        height: 0.5,
        backgroundColor: 'gray',
        marginTop: 20
    }
});

export default Setting;