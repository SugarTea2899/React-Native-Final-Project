import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from './ListCourseItem/ListCourseItem';



const ListCourse = ({style, header, hideTotal, navigation, courses = [], route}) => {
    let finalCourse = courses.slice();
    if (route && route.params && route.params.courses !== undefined) finalCourse = route.params.courses.slice();
    return (
        <View style={[styles.container, style]}>
            {!hideTotal && <Text style={styles.total}>{`${finalCourse.length} Results`}</Text>}
            <FlatList
                data={finalCourse}
                renderItem={({item}) => <ListCourseItem key={item.id} navigation={navigation} course={item}/>}
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
        marginBottom: 1,
        fontSize: 14
    }
});

export default ListCourse;