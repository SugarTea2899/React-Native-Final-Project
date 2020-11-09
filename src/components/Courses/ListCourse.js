import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from './ListCourseItem/ListCourseItem';

const courses = [
    {
        id: '1',
        title: 'React1',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '2',
        title: 'React2',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '3',
        title: 'React3',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '4',
        title: 'React4',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '5',
        title: 'React5',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '6',
        title: 'React6',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    },
    {
        id: '7',
        title: 'React7',
        author: 'Simon Allardice',
        level: 'Beginer',
        date: 'Oct 2020',
        time: '2h 8m',
        image: require('../../../assets/background_1.jpg')
    }
]


const ListCourse = ({style, header, hideTotal}) => {
    return (
        <View style={[styles.container, style]}>
            {!hideTotal && <Text style={styles.total}>11 Results</Text>}
            
            <FlatList
                data={courses}
                renderItem={({item}) => <ListCourseItem course={item}/>}
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