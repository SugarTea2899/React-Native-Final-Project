import { useIsFocused } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { fetchWithAu } from '../../../api/fetchData';
import { UserContext } from '../../../contexts/UserContext';
import { API_URL } from '../../../globals/constants';
import { LIST_COURSE, LIST_PATH } from '../../../globals/KeyScreen';
import PathSection from '../BrowseScreen/PathSection/PathSection';
import CourseSection from './CourseSection/CourseSection';



const HomeScreen = ({ navigation }) => {
	const { token } = useContext(UserContext);
	const [course, setCourse] = useState([]);
	const isFocused = useIsFocused();

	const handleHistory = () => {
		navigation.navigate(LIST_COURSE, { title: 'History' });
	}
	const handleBookmark = () => {
		navigation.navigate(LIST_COURSE, { title: 'Bookmark' })
	}
	const handlePath = () => {
		navigation.navigate(LIST_PATH, { title: 'Paths' });
	}
	const handleChannel = () => {
		navigation.navigate(LIST_PATH, { title: 'Channels' })
	}

	useEffect(() => {
		if (token !== null){
			fetchWithAu(API_URL + 'user/get-favorite-courses', 'GET', token)
				.then(
					(data) => {
						setCourse(data.payload);
					},
					(erro) => {
						console.log(erro.message);
					}
				)
		}
	}, [token, isFocused])
	return (
		<View style={{ flex: 1, justifyContent: token === null ? 'center' : 'flex-start'}}>
			{
				token === null
					?
					<Text style={styles.text}>You must login to see this page.</Text>
					:
					<ScrollView showsVerticalScrollIndicator={false}>
						<CourseSection courses={course} handleSeeAll={handleHistory} navigation={navigation} style={{ marginTop: 30 }} title={'Favorite Courses'} />
					</ScrollView>
			}
		</View>

	);
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		textAlign: 'center',
		fontSize: 17,
	}
})

export default HomeScreen;