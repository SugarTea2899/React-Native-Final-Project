import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { AntDesign } from "@expo/vector-icons";

const HistoryItem = ({history, remove = () => {}, select = () => {}}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FontAwesome5 name="history" size={24} color={theme.TEXT_COLOR} />
      </View>
      <Text onPress={select} style={[{ color: theme.TEXT_COLOR }, styles.content]}>{history.content}</Text>
      <View style={styles.deleteItem}>
        <AntDesign onPress={remove} name="delete" size={24} color={theme.TEXT_COLOR} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  content: {
    marginLeft: 15,
    flex: 8,
  },
  deleteItem: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
});

export default HistoryItem;
