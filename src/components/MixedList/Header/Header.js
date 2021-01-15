import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { AUTHOR_TAB, COURSE_TAB, PATH_TAB } from "../../../globals/KeyScreen";

const Header = ({ title, total, navigation }) => {
  const { languageConstant } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.TEXT_COLOR }]}>{title}</Text>
      <Text
        style={[styles.total, { color: theme.TEXT_COLOR }]}
      >{`${total} ${languageConstant.RESULT} >`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  total: {
    color: "gray",
    fontSize: 12,
    alignSelf: "center",
    paddingRight: 10,
  },
});

export default Header;
