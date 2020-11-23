import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SKILL_DETAIL } from '../../../../../globals/keyScreen';


const SkillItem = ({content, ticked, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(SKILL_DETAIL, {content: content})}>
            <View style={styles.skill}>
                {
                    ticked 
                    && 
                    <View style={styles.iconContainer}> 
                        <FontAwesome name="check-circle" size={20} color="orangered" />
                    </View>
                }

                <Text style={styles.skillName}>{content}</Text>
            </View>            
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    skillName: {
        color: 'white'
    },
    skill: {
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'gray',
        borderRadius: 18,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: 'white', 
        borderRadius: 9, 
        height: 18, 
        width: 18, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 10
    }
});

export default SkillItem;