import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const Stars = ({maxStar, curStar, starSize, style, ratedNumbe}) => {
    const remainStar = maxStar - curStar;
    const genCurStar = () => {
        const res = [];
        for (let i = 1; i <= curStar; i++){
            res.push(<Entypo key={i} style={{paddingRight: 3, marginTop: 3.5}} name="star" size={starSize} color="gold" />)
        }
        return res;
    }

    const genRemainStar = () => {
        const res = [];
        for (let i = 1; i <= remainStar; i++){
            res.push(<Entypo key={i} style={{paddingRight: 3, marginTop: 3.5}} name="star" size={starSize} color="darkgray" />)
        }
        return res;
    }
    return (
        <View style={[styles.container, style]} >
            {genCurStar()}
            {genRemainStar()}
            {ratedNumbe !== undefined && <Text style={styles.text} >{`(${ratedNumber})`}</Text>}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        color: 'gray',
        marginLeft: 3
    }
});

export default Stars;