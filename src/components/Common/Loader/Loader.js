import React from 'react';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';


const Loader = ({ loading }) => {
    return (
        <Modal
            visible={loading}
            animationType='none'
            transparent
        >
            <View style={styles.container}>
                <ActivityIndicator color="dodgerblue" animating={loading} size='large' />
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

export default Loader;