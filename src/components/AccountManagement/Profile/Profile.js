import React from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SkillItem from '../../Main/BrowseScreen/SkillSection/SkillItem/SkillItem';
import InfoItem from './InfoItem/InfoItem';


const Profile = ({route}) => {
    const {name} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <FontAwesome name="user-circle" size={40} color="lightskyblue" />
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.skillSection}> 
                <Text style={styles.interests}>Interests</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SkillItem ticked content={'React Native'}/>
                    <SkillItem ticked content={'React JS'}/>
                    <SkillItem ticked content={'JavaScript'}/>
                    <SkillItem ticked content={'Java'}/>
                    <SkillItem ticked content={'C++'}/>
                </ScrollView>
            </View>
            <Text style={styles.activity}>Activity insights (last 30 days)</Text>
            <View style={styles.infoSection}>
                <InfoItem title='TOTAL ACTIVE DAYS' content='10' />
                <InfoItem style={{marginTop: 20}} title='MOST ACTIVE TIME OF DAY' content='7:00 AM' />
                <InfoItem style={{marginTop: 20}} title='MOST VIEWED SUBJECT' content='N/A' />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingTop: 18
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        marginLeft: 15,
        fontSize: 17
    },
    skillSection: {
        marginTop: 45
    },
    interests: {
        color: 'white'
    },
    activity: {
        color: 'white',
        marginTop: 40
    },
    infoSection: {
        marginTop: 30
    }
});

export default Profile;