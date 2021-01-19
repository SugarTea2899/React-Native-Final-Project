import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, FlatList, Text } from 'react-native';
import ListAuthorsItem from '../ListAuthorsItem/ListAuthorsItem'


const ListAuthors = ({style, navigation, authors, total, loadMore = () => {}}) => {
    let _total = total ? total : authors.length;
    const [onEndReachedCall, setOnEndReachedCall] = useState(true); 
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.total}>{`${_total} Results`}</Text>
            <FlatList 
                data={authors}
                renderItem={({item}) => <ListAuthorsItem navigation={navigation} author={item}/>}
                keyExtractor={item => item.id}
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
        paddingBottom: 15,
        marginRight: 15,
    },
    total: {
        color: 'gray',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 14
    }
});

export default ListAuthors;