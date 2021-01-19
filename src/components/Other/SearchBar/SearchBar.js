import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { fetchWithoutAu } from "../../../api/fetchData";
import { API_URL } from "../../../globals/constants";
import { ThemeContext } from "../../../contexts/ThemeContext";

const SearchBar = ({ setResult, value, search = () => {} }) => {
  const [text, setText] = useState("");
  const { theme } = useContext(ThemeContext);

  const remove = () => {
    setText("");
    setResult({
      courses: [],
      authors: [],
      searchValue: "",
      totalCourses: 0,
      totalAuthors: 0,
      offsetCourses: 0,
      offsetAuthors: 0,
    });
  };

  useEffect(() => {
    if (value !== text) {
      setText(value);
      search(value, 0);
    }
  }, [value]);

  return (
    <View style={styles.bar}>
      <TextInput
        value={text}
        style={[styles.textInput, { color: theme.TEXT_COLOR }]}
        onChangeText={(text) => {
          setText(text);
        }}
        placeholder={"Search"}
        placeholderTextColor={theme.TEXT_COLOR_BLUR}
      />
      <TouchableWithoutFeedback onPress={() => search(text, 0)}>
        <FontAwesome
          style={{ marginRight: 15 }}
          name="search"
          size={22}
          color={theme.TEXT_COLOR}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => remove()}>
        <FontAwesome
          style={styles.customIcon}
          name="remove"
          size={24}
          color={theme.TEXT_COLOR}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    height: 40,
    width: "auto",
    fontSize: 17,
    marginRight: 10,
    color: "white",
  },
  customIcon: {
    marginRight: 7,
  },
});

export default SearchBar;
