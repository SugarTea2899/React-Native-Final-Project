import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from './ListCourseItem/ListCourseItem';



const ListCourse = ({style, header, hideTotal, navigation, courses = []}) => {
    return (
        <View style={[styles.container, style]}>
            {!hideTotal && <Text style={styles.total}>{`${courses.length} Results`}</Text>}
            
            <FlatList
                data={courses}
                renderItem={({item}) => <ListCourseItem navigation={navigation} course={item}/>}
                keyExtractor={item => item.id}
                ListHeaderComponent={header}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 15
    },
    total: {
        color: 'gray',
        marginLeft: 2,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 14
    }
});

export default ListCourse;