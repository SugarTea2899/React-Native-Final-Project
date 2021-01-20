import React from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import RegisteredItem from './RegisteredItem';


const RegisteredList = ({route, navigation}) => {
    const {courses} = route.params
    return (
        <View style={styles.container}>
            <FlatList 
                data={courses}
                renderItem={({item}) => <RegisteredItem navigation={navigation} course={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    }
});

export default RegisteredList;