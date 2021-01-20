import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { AUTHOR } from "../../../../globals/KeyScreen";
import { convertToDateTime } from "../../../../globals/util";
import Stars from "../../../Common/Stars/Stars";

const Review = ({ review, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              review.user.avatar === ""
                ? "http://lh3.googleusercontent.com/proxy/UHY_fKWgsC8byTsnG0A5C1SI3Vnb2IihMIlG-ss9bbfKPp-95Alj6_A-bva88bAsqEVhFfewxaHCgTqnP3kTA2TUs9bdHEBswytvaLZQxhYhdkS9ewjIpcJE874HnPGracIdaMt6ccCwR1zx"
                : review.user.avatar,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{review.user.name}</Text>
        <Stars
          maxStar={5}
          curStar={
            review.formalityPoint > 5 ? 5 : Math.round(review.formalityPoint)
          }
          starSize={10}
        />
        <Stars
          maxStar={5}
          curStar={
            review.contentPoint > 5 ? 5 : Math.round(review.contentPoint)
          }
          starSize={10}
        />
        <Stars
          maxStar={5}
          curStar={
            review.presentationPoint > 5
              ? 5
              : Math.round(review.presentationPoint)
          }
          starSize={10}
        />
        <View style={styles.contentWraper}>
          <Text style={styles.content}>{review.content}</Text>
          <Text style={styles.date}>
            {review.createdAt && convertToDateTime(review.createdAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(66, 66, 66, 0.6)",
    borderRadius: 10,
    paddingTop: 6,
  },
  imageContainer: {
    flex: 1.5,
    alignItems: "center",
  },
  contentContainer: {
    flex: 4,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    color: "lightgray",
    fontSize: 14,
  },
  contentWraper: {
    marginTop: 10,
  },
  date: {
    color: "white",
    color: "lightgray",
    fontSize: 9,
    fontStyle: "italic",
    textAlign: "right",
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 7,
  },
});

export default Review;
