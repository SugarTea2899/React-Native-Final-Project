import React from 'react';
import {View, StyleSheet, SectionList } from 'react-native';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentItem from './ContentItem/ContentItem';


const DATA = [
    {
        title: 'Course Overview',
        time: '2:06',
        number: 1,
        data: [
            {
                content: 'Course Overview',
                time: '2:06'
            }
        ]
    },
    {
        title: 'The Basics',
        time: '57:22',
        number: 2,
        data: [
            {
                content: 'Introduction',
                time: '3:54'
            },
            {
                content: 'Why React?',
                time: '5:58'
            },
            {
                content: 'React Basic Concepts',
                time: '5:23'
            },
            {
                content: 'Your First React Component',
                time: '10:00'
            },
            {
                content: 'Your First React Hook',
                time: '7:54'
            },
        ] 
    },
    {
        title: 'Mordern JavaScript Crash Course',
        time: '22:41',
        number: 3,
        data: [
            {
                content: 'ECMAScript and TC39',
                time: '1:26'
            },
            {
                content: 'Variable and BLock Scopes',
                time: '2:28'
            },
            {
                content: 'Arrow Function',
                time: '5:20'
            }
        ]
    }
]
const ContentList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <ContentItem content={item.content} time={item.time} />}
                renderSectionHeader={({section: {title, time, number}}) => <ContentHeader title={title} time={time} number={number} />}
                listKey={new Date().getTime().toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 8
    }
});

export default ContentList;