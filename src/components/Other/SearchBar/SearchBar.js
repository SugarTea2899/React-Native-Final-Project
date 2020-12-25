import React from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { fetchWithoutAu } from '../../../api/fetchData';
import { API_URL } from '../../../globals/constants';


const SearchBar = ({ setResult }) => {
    const [text, setText] = useState('');
    const { token } = useContext(UserContext);

    const search = (value) => {
        setText(value);
        if (value.length !== 0 && token !== null) {
            const data = {
                token: token,
                keyword: value,
                limit: 20,
                offset: 0
            }
            fetchWithoutAu(API_URL + 'course/searchV2', 'POST', data)
                .then(
                    (data) => {
                        setResult({
                            courses: data.payload.courses.data.slice(),
                            authors: data.payload.instructors.data.slice(),
                        })
                    },
                    (error) => {
                        console.log(error.message);
                    }
                )
        } else {
            if (value.length === 0) setResult({courses: [], authors: []})
        }
    }

    const remove = () => {
        setText('');
        setResult({courses: [], authors: []});
    }
    return (
        <View style={styles.bar}>
            <TextInput
                value={text}
                style={styles.textInput}
                onChangeText={(text) => {search(text);}}
                placeholder={'Search'}
                placeholderTextColor={'lightgray'}
            />
            <TouchableWithoutFeedback onPress={() => remove()}>
                <FontAwesome style={styles.customIcon} name="remove" size={24} color="white" />
            </TouchableWithoutFeedback>

        </View>
    );
}


const styles = StyleSheet.create({
    bar: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 15
    },
    textInput: {
        flex: 1,
        height: 40,
        width: 'auto',
        fontSize: 17,
        marginRight: 10,
        color: 'white'
    },
    customIcon: {
        marginRight: 4
    }
});

export default SearchBar;