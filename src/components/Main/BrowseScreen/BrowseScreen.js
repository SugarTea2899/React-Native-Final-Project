import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ImageButtonSection from './ImageButtonSection/ImageButtonSection';
import PathSection from './PathSection/PathSection';
import SkillSection from './SkillSection/SkillSection';
import AuthorSection from './AuthorSection/AuthorSection';
import { LIST_PATH } from '../../../globals/KeyScreen';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useEffect } from 'react';
import { fetchWithoutAu } from '../../../api/fetchData';
import { API_URL } from '../../../globals/constants';
const BrowseScreen = ({navigation}) => {
    const {token, setLoading} = useContext(UserContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchWithoutAu(API_URL + 'category/all', 'GET')
            .then(
                (data) => {
                    setCategories(data.payload)
                    setLoading(false);
                    
                },
                (error) => {
                    console.log(error.message);
                }
            )
    }, [])
    return (
        <View style={{ flex: 1}}>
            <ScrollView>
                <ImageButtonSection navigation={navigation}/>
                <SkillSection navigation={navigation} categories={categories} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default BrowseScreen;