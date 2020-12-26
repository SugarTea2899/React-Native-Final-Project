import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
import { initContentList } from '../../../actions/CourseActions';
import { CourseContext } from '../../../contexts/CourseContext';
import { convertHour } from '../../../globals/util';
import ContentHeader from './ContentHeader/ContentHeader';
import ContentItem from './ContentItem/ContentItem';


const DATA = [
    {
        name: 'Course Overview',
        sumHours: 0.52,
        numberOrder: 1,
        data: [
            {
                name: 'Course Overview',
                hours: 0.52
            },
            {
                name: 'Course Overview',
                hours: 0.52
            }
        ]
    }
]

const ContentList = ({ data, activeIndex = { i: -1, j: -1 }, handleClick }) => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index, section: { numberOrder } }) => {
                    const active = activeIndex.i === numberOrder - 1 && activeIndex.j === index;
                    return <ContentItem
                        active={active}
                        content={item.name}
                        time={convertHour(item.hours)}
                        handleClick={() => handleClick(numberOrder - 1, index)}
                    />
                }}
                renderSectionHeader={({ section: { name, sumHours, numberOrder } }) => <ContentHeader title={name} time={convertHour(sumHours)} number={numberOrder} />}
                listKey={new Date().getTime().toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 8
    }
});

export default ContentList;