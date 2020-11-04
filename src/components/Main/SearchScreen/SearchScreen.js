import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ListCourse from '../../Courses/ListCourse';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerBar}>
                <View style={styles.bar}>
                    <TextInput style={styles.textInput} placeholder={'Search'} placeholderTextColor={'lightgray'} />
                    <FontAwesome style={styles.customIcon} name="remove" size={24} color="white" />
                </View>
            </View>

            <ListCourse style={{marginTop: 20}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerBar: {
        backgroundColor: '#363636',
        paddingBottom: 15
    },

    bar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginLeft: 35,
        marginRight: 20
    },
    textInput: {
        flex: 1,
        height: 50,
        width: 'auto',
        fontSize: 20,
        marginRight: 10,
        color: 'white'
    },
    customIcon: {
        marginRight: 4
    }
});
export default SearchScreen;