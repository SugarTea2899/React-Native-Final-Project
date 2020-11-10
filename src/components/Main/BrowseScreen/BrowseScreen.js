import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';
import AuthorSection from './AuthorSection/AuthorSection';
const BrowseScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <ImageButtonSection navigation={navigation}/>
                <SkillSection />
                <PathSection title={'Paths'} />
                <AuthorSection />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default BrowseScreen;