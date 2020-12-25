import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AUTHOR } from '../../../../globals/KeyScreen';
import Stars from '../../../Common/Stars/Stars';


const Review = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/72/eb/b6/72ebb6e15a76ac319e7275d8cb2d6626.jpg'}} />
      </View>
      <View style={styles.contentContainer} >
        <Text style={styles.text} >
          username
        </Text>
        <Stars maxStar={5} curStar={2} starSize={10} />
        <Stars maxStar={5} curStar={2} starSize={10} />
        <Stars maxStar={5} curStar={2} starSize={10} />
        <View style={styles.contentWraper}>
          <Text style={styles.content}>
            khoa hoc oke
          </Text>
          <Text style={styles.date}>
            12/12/2020, 10:00
          </Text>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(66, 66, 66, 0.6)',
    borderRadius: 10,
    paddingTop: 6,
  },
  imageContainer: {
    flex: 1.5,
    alignItems: 'center'
  },
  contentContainer: {
    flex: 4,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 10
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  content: {
    color: 'lightgray',
    fontSize: 14,
  },
  contentWraper: {
    marginTop: 10
  },
  date: {
    color: 'white',
    color: 'lightgray',
    fontSize: 9,
    fontStyle: 'italic',
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 7
  }
});

export default Review;