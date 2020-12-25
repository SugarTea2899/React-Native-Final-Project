import React from 'react';
import {View, StyleSheet, SectionList, Text } from 'react-native';
import ListAuthorsItem from '../Authors/ListAuthorsItem/ListAuthorsItem';
import ListCourseItem from '../Courses/ListCourseItem/ListCourseItem';
import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import Header from './Header/Header';


const MixedList = ({navigation, results}) => {

    const renderItem = ({item, index, section}) => {
        if (index >= 4) return <Text style={styles.emptyText}> </Text>;
        switch (section.title){
            case 'Courses':
                return <ListCourseItem navigation={navigation} course={item}/>
            case 'Authors':
                return <ListAuthorsItem navigation={navigation} author={item} />
        }       
    };

    return (
        <View style={styles.container}>
            <SectionList 
                initialNumToRender={2}
                sections={results}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, data}}) => <Header navigation={navigation} title={title} total={data.length}/>}
                listKey={new Date().getTime().toString()}
                nestedScrollEnabled
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
    emptyText:{
        width: 0,
        height: 0
    }
});

export default MixedList;