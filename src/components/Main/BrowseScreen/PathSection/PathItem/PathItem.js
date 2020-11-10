import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PathItem = ({path, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Path Detail', {path: path})}>
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
        height: 200,
        width: 230,
        backgroundColor: '#151c2e',
        marginRight: 20
    },
    image: {
        height: 100,
        width: 'auto'
    },
    textGroup: {
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    course: {
        color: 'lightgray',
        marginTop: 4,
        fontSize: 12
    }
});

export default PathItem;