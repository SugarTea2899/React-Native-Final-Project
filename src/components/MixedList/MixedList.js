import React from 'react';
import { useContext } from 'react';
import {View, StyleSheet, SectionList, Text } from 'react-native';
import { LanguageContext } from '../../contexts/LanguageContext';
import ListAuthorsItem from '../Authors/ListAuthorsItem/ListAuthorsItem';
import ListCourseItem from '../Courses/ListCourseItem/ListCourseItem';
import ListPathItem from '../Paths/ListPathItem/ListPathItem';
import Header from './Header/Header';


const MixedList = ({navigation, results}) => {
    const {languageConstant} = useContext(LanguageContext);

    const renderItem = ({item, index, section}) => {
        if (index >= 4) return <Text style={styles.emptyText}> </Text>;
        switch (section.title){
            case languageConstant.COURSE:
                return <ListCourseItem navigation={navigation} course={item}/>
            case languageConstant.AUTHOR:
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
                renderSectionHeader={({section: {title, total, data}}) => <Header navigation={navigation} title={title} total={total}/>}
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