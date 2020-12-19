import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PATH_DETAIL } from '../../../../../globals/KeyScreen';

const PathItem = ({path, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(PATH_DETAIL, {path: path})}>
            <View style={styles.container}>
                <Image style={styles.image} source={path.image} />
                <View style={styles.textGroup}>
                    <Text style={styles.title}>
                        {path.title}
                    </Text>
                    <Text style={styles.course}>
                        {`${path.numCourse} courses`}
                    </Text>
                </View>
            </View>            
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 210,
        width: 230,
        backgroundColor: '#151c2e',
        marginRight: 20,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    image: {
        height: 110,
        width: 'auto',
        resizeMode: 'stretch',
    },
    textGroup: {
        paddingTop: 10,
        paddingLeft: 10
    },
    title: {
        color: 'white',
        fontSize: 17
    },
    course: {
        color: 'lightgray',
        marginTop: 4,
        fontSize: 10
    }
});

export default PathItem;