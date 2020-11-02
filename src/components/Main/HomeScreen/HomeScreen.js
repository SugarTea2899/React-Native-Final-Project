import React from 'react';
import { Text, View } from 'react-native';
import ImageButton from './ImageButton/ImageButton';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageButton uri={'assets:/favicon.png'} content="NEW RELASE" textSize={30} />
        </View>
    );
}

export default HomeScreen;