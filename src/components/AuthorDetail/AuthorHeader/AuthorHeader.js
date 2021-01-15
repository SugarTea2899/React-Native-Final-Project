import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AuthorItem from '../../Main/BrowseScreen/AuthorSection/AuthorItem/AuthorItem';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import SkillItem from '../../Main/BrowseScreen/SkillSection/SkillItem/SkillItem';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { LanguageContext } from '../../../contexts/LanguageContext';

const AuthorHeader = ({ author }) => {
    const {theme} = useContext(ThemeContext);
    const {languageConstant} = useContext(LanguageContext);
    
    return (
        <View style={styles.container}>
            <AuthorItem style={styles.authorItem} imageStyle={styles.imageStyle} author={author} />
            <View style={styles.linkContainer}>
                <Entypo name="email" size={20} color={theme.TEXT_COLOR} />
                <Text style={[styles.link, {color: theme.TEXT_COLOR}]}>{author.email}</Text>
            </View>
            <View style={styles.linkContainer}>
                <Feather name="phone" size={20} color={theme.TEXT_COLOR} />
                <Text style={[styles.link, {color: theme.TEXT_COLOR}]}>{author.phone}</Text>
            </View>
            <Text style={[styles.skill, {color: theme.TEXT_COLOR}]}>Skills</Text>
            <ScrollView style={{alignSelf: 'flex-start'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.skillSection}>
                    {author.skills.map((item, index) => <SkillItem key={index} disble ticked content={item} />)}
                </View>
            </ScrollView>

            <Text style={[styles.course, {color: theme.TEXT_COLOR}]}>{languageConstant.COURSE}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 18
    },
    authorItem: {
        width: 200,
        height: 100,
        marginRight: 0
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    position: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 2
    },
    button: {
        backgroundColor: 'dodgerblue',
        flexDirection: 'row',
        marginTop: 16,
    },
    textArea: {
        marginTop: 20,
        flexDirection: 'row'
    },
    linkContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 20
    },
    link: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        marginLeft: 14
    },
    skillSection: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    course: {
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 40,
        fontSize: 17
    },
    skill: {
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 30,
        fontSize: 17
    }
});

export default AuthorHeader;