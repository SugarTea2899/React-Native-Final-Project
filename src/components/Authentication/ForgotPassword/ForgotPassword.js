import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet, StatusBar, ScrollView, Alert } from "react-native";
import { fetchWithoutAu } from "../../../api/fetchData";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { UserContext } from "../../../contexts/UserContext";
import { API_URL } from "../../../globals/constants";
import MyButton from "../../Common/MyButton/MyButton";
import MyInput from "../../Common/MyInput/MyInput";

const ForgotPassword = () => {
  const { theme } = useContext(ThemeContext);
  const { setLoading } = useContext(UserContext);
  const [email, setEmail] = useState(email);
  const handleSend = () => {
    if (email === "") {
      return;
    }

    const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
      Alert.alert("Error", "Email is invalid");
      return;
    }

    setLoading(true);
    fetchWithoutAu(API_URL + "user/forget-pass/send-email", "POST", {
      email: email,
    }).then(
      (data) => {
        setLoading(false);
        Alert.alert("Success", data.message);
      },
      (error) => {
        setLoading(false);
        Alert.alert("Error", error.message);
      }
    );
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.LOGIN_BACKGROUND }]}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <MyInput text={email} setText={setEmail} lable={"EMAIL"} />
        <MyButton
          handleClick={handleSend}
          style={styles.button}
          text={"SEND"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    paddingLeft: 35,
    paddingRight: 35,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 40,
  },
  button: {
    backgroundColor: "dodgerblue",
    marginTop: 40,
  },
});

export default ForgotPassword;
