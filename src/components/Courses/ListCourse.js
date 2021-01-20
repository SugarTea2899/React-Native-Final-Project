import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LanguageContext } from '../../contexts/LanguageContext';
import ListCourseItem from './ListCourseItem/ListCourseItem';



const ListCourse = ({style, header, hideTotal, navigation, courses = [], route, loadMore = () => {}, total}) => {
    const {languageConstant} = useContext(LanguageContext);
    const [onEndReachedCall, setOnEndReachedCall] = useState(true);

    let finalCourse = courses.slice();
    if (route && route.params && route.params.courses !== undefined) finalCourse = route.params.courses.slice();
    let _total = total ? total : finalCourse.length;
    return (
        <View style={[styles.container, style]}>
            {!hideTotal && <Text style={styles.total}>{`${_total} ${languageConstant.RESULT}`}</Text>}
            <FlatList
                data={finalCourse}
                renderItem={({item, index}) => <ListCourseItem navigation={navigation} course={item}/>}
                keyExtractor={item => item.id}
                ListHeaderComponent={header}
                onMomentumScrollBegin={() => setOnEndReachedCall(false)}
                onEndReached={() => {
                    if (!onEndReachedCall) {
                        loadMore();
                        setOnEndReachedCall(true);
                    }
                }}
                onEndReachedThreshold={0.01}
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