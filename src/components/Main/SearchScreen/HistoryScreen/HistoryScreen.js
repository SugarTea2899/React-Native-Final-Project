import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { fetchWithAu } from "../../../../api/fetchData";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { UserContext } from "../../../../contexts/UserContext";
import { API_URL } from "../../../../globals/constants";
import HistoryItem from "./HistoryItem";

const HistoryScreen = ({selectHistory = () => {}}) => {
  const { theme } = useContext(ThemeContext);
  const { token } = useContext(UserContext);
  const [histories, setHistories] = useState();

  useEffect(() => {
    if (token !== null) {
      fetchWithAu(API_URL + "course/search-history", "GET", token).then(
        (data) => {
          setHistories(data.payload.data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  }, []);

  const handleRemoveHistory = (index) => {
    const history = histories[index];
    const _histories = histories.filter((item) => item.id !== history.id);
    setHistories(_histories.slice());

    fetchWithAu(
      API_URL + `course/delete-search-history/${history.id}`,
      "DELETE",
      token
    ).then(
      (data) => {},
      (error) => {
        console.log(error.message);
      }
    );
  };

  const handleSelectHistory = (value) => {
    selectHistory(value);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.TEXT_COLOR }]}>
        Recent Searches
      </Text>
      <FlatList
        data={histories}
        renderItem={({ item, index }) => (
          <HistoryItem
            history={item}
            select={() => handleSelectHistory(item.content)}
            remove={() => handleRemoveHistory(index)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 30,
  },
  title: {
    marginTop: 5,
    fontSize: 17,
    marginBottom: 17,
  },
});

export default HistoryScreen;
