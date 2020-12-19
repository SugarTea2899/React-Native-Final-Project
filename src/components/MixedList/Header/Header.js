import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { AUTHOR_TAB, COURSE_TAB, PATH_TAB } from '../../../globals/KeyScreen';


const Header = ({title, total, navigation}) => {
    const handleSwitchTab = () => {
        switch (title) {
            case 'Courses':
                navigation.navigate(COURSE_TAB);
                break;
            case 'Paths':
                navigation.navigate(PATH_TAB);
                break;
            case 'Authors':
                navigation.navigate(AUTHOR_TAB);
                break;
            default:
                break;
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handleSwitchTab}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.total}>{`${total} Results >`}</Text>
            </View>
        </TouchableWithoutFeedback>

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