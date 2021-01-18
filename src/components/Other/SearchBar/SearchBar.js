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

const SearchBar = ({ setResult, value }) => {

  const [text, setText] = useState("");
  const { token } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const {setLoading} = useContext(UserContext);

  const search = (value) => {
    if (value && value.length !== 0 && token !== null) {
      setLoading(true);
      const data = {
        token: token,
        keyword: value,
        limit: 20,
        offset: 0,
      };
      fetchWithoutAu(API_URL + "course/searchV2", "POST", data).then(
        (data) => {
          setLoading(false);
          setResult({
            courses: data.payload.courses.data.slice(),
            authors: data.payload.instructors.data.slice(),
            searchValue: value
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
        }
      );
    } else {
      if (value && value.length === 0) setResult({ courses: [], authors: [], searchValue: '' });
    }
  };

  const remove = () => {
    setText("");
    setResult({ courses: [], authors: [], searchValue: '' });
  };

  useEffect(() => {
    setText(value);
    search(value);
  }, [value])

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
      <TouchableWithoutFeedback onPress={() => search(text)}>
        <FontAwesome
          style={{marginRight: 15}}
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
