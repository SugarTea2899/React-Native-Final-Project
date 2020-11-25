import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import PathItem from './PathItem/PathItem';


const paths = [
    {
        id: '1',
        title: 'Building Web Applications with React',
        numCourse: 44,
        image: require('../../../../../assets/courses/course_01.png')        
    },
    {
        id: '2',
        title: 'Microsoft Azure Adminstrator',
        numCourse: 21,
        image: require('../../../../../assets/paths/path_01.png')        
    },
    {
        id: '3',
        title: 'Working with REST API in JavaScript',
        numCourse: 6,
        image: require('../../../../../assets/paths/path_02.jpg')        
    },
    {
        id: '4',
        title: 'AWS Certified Solutions',
        numCourse: 8,
        image: require('../../../../../assets/paths/path_03.png')        
    },
    {
        id: '5',
        title: 'Core Python',
        numCourse: 15,
        image: require('../../../../../assets/paths/path_04.png')        
    },
    {
        id: '6',
        title: 'Design Pattern in Java',
        numCourse: 5,
        image: require('../../../../../assets/paths/path_05.jpeg')        
    },
    {
        id: '7',
        title: 'Java Unit Testing',
        numCourse: 5,
        image: require('../../../../../assets/paths/path_05.jpeg')        
    },
    {
        id: '8',
        title: 'Introduction to Professional Scrum',
        numCourse: 5,
        image: require('../../../../../assets/paths/path_06.jpg')        
    },
    {
        id: '9',
        title: 'Java Spring Framework',
        numCourse: 7,
        image: require('../../../../../assets/paths/path_07.png')        
    },
    {
        id: '10',
        title: 'Developing Applications with Google Could',
        numCourse: 2,
        image: require('../../../../../assets/paths/path_08.jpg')        
    },
]

const PathSection = ({title, navigation, style, handleSeeAll}) => {

    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={styles.path}>
                    {title}
                </Text>
                <TouchableWithoutFeedback onPress={handleSeeAll}>
                    <Text style={styles.seeALL}>
                        {'See all >'}
                    </Text>
                </TouchableWithoutFeedback>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    paths.map((item, index) => { return index < 4 ? <PathItem key={item.id} navigation={navigation} path={item}/> : <Text key={item.id} style={styles.emptyText}></Text>})
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10
    },
    textGroup: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    path: {
        color: 'white',
        fontSize: 18
    },
    seeALL:{
        color: 'ghostwhite',
        fontStyle: 'italic',
        paddingRight: 10,
        paddingTop: 5
    },
    emptyText: {
        width: 0,
        height: 0
    }
});

export default PathSection;