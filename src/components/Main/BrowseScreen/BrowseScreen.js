import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import AuthorItem from './AuthorSection/AuthorItem/AuthorItem';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';

const BrowseScreen = () => {
    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <ImageButtonSection />
                <SkillSection />
                <PathSection />
                <AuthorItem />
            </ScrollView>
        </View>
    );
}

export default BrowseScreen;