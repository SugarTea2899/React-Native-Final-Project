import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import CourseInfoSection from './CourseInfoSection/CourseInfoSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import IconSection from './IconSection/IconSection';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MixedList from '../MixedList/MixedList';
import ContentList from './ContentList/ContentList';
import Transcript from './Transcript/Transcript';

const Tab = createMaterialTopTabNavigator();

const CourseDetail = ({route}) => {
    const {course} = route.params;
    const header = <React.Fragment>
                        <CourseInfoSection course={course} />
                        <IconSection />
                        <DescriptionSection />                 
                   </React.Fragment>
    const content = <Tab.Navigator
                        tabBarOptions={{
                            style: {
                                backgroundColor: '#262525',
                                marginTop: 10
                            },
                            activeTintColor: 'dodgerblue',
                            inactiveTintColor: 'gray',
                            labelStyle: {
                                fontWeight: 'bold',
                                fontSize: 16
                            }
                        }}
                    >
                        <Tab.Screen name="CONTENT" component={ContentList} />
                        <Tab.Screen name="TRANSCRIPT" component={Transcript} />
                    </Tab.Navigator>

    return (
        <View style={styles.container}>
            <View style={styles.videoSection}>
                <Image style={styles.image}  source={course.image} />
            </View>

            <View style={styles.contentSection}>
                <FlatList 
                    ListHeaderComponent={header}
                    data={[1]}
                    renderItem={({item}) => content}
                    keyExtractor={(item) => `${item}`}
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1}}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoSection: {
        flex: 1,
        flexDirection: 'row'
    },
    contentSection: {
        flex: 2,
        backgroundColor: "#262525",
    },
    image:{
        flex: 1,
        height: 'auto',
        resizeMode: 'stretch',
    }
});

export default CourseDetail;