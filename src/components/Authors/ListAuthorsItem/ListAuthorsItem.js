import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AUTHOR } from "../../../globals/KeyScreen";

const ListAuthorsItem = ({ author, navigation }) => {
  const { languageConstant } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(languageConstant.AUTHOR, { authorId: author.id })
      }
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: author.avatar }} />
        <View style={styles.content}>
          <Text style={[styles.name, { color: theme.TEXT_COLOR }]}>
            {author.name}
          </Text>
          <Text
            style={[styles.numCourses, { color: theme.TEXT_COLOR_BLUR }]}
          >{`${author.numcourses} Courses`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.8,
    marginLeft: 7,
    marginRight: 7
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 25,
    marginLeft: 4,
  },
  content: {
    marginLeft: 20,
    alignSelf: "center",
  },
  name: {
    color: "white",
    fontSize: 17,
  },
  numCourses: {
    color: "gray",
    fontSize: 11,
    marginTop: 2,
  },
});

export default ListAuthorsItem;
