import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';
import AuthorSection from './AuthorSection/AuthorSection';
import { LIST_PATH } from '../../../globals/keyScreen';
const BrowseScreen = ({navigation}) => {
    const handleSeeAllPath = () => {
        navigation.navigate(LIST_PATH, {title: 'Paths'});
    }
    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <ImageButtonSection navigation={navigation}/>
                <SkillSection navigation={navigation} />
                <PathSection navigation={navigation} handleSeeAll={handleSeeAllPath} title={'Paths'} />
                <AuthorSection navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default BrowseScreen;