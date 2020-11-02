import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';
import AuthorSection from './AuthorSection/AuthorSection';
const BrowseScreen = () => {
    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <ImageButtonSection />
                <SkillSection />
                <PathSection />
                <AuthorSection />
            </ScrollView>
        </View>
    );
}

export default BrowseScreen;