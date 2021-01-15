import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import RegisterdCourse from './RegisteredCourse';



const RegisterSection = ({title, style, navigation, courses}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <View style={[styles.container, style]}>
            <View style={styles.textGroup}>
                <Text style={[styles.title, {color: theme.TEXT_COLOR}]}>
                    {title}
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                   courses &&  courses.map((item, index) => <RegisterdCourse key={item.id} navigation={navigation} course={item} />)
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    textGroup: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
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

export default RegisterSection;
