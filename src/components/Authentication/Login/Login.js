import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";
import { fetchWithoutAu } from "../../../api/fetchData";
import { UserContext } from "../../../contexts/UserContext";
import { API_URL, TOKEN_NAME, USER_INFO } from "../../../globals/constants";
import * as SecureStore from "expo-secure-store";
import { FORGOT_PASSWORD, HOME, REGISTER } from "../../../globals/KeyScreen";
import MyButton from "../../Common/MyButton/MyButton";
import MyInput from "../../Common/MyInput/MyInput";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import * as Google from "expo-google-app-auth";

const Login = ({ navigation }) => {
  const { languageConstant } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const handleRegister = () => {
    navigation.navigate(languageConstant.REGISTER);
  };
  const { setContent, setLoading } = useContext(UserContext);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Erro", "Empty infomation");
      return;
    }

    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    fetchWithoutAu(API_URL + "user/login", "POST", data).then(
      async (data) => {
        setContent(data.token);
        await SecureStore.setItemAsync(TOKEN_NAME, data.token);
        setLoading(false);
        navigation.popToTop();
      },
      (erro) => {
        setLoading(false);
        Alert.alert("Error", erro.message);
      }
    );
  };

  const loginGoogle = async () => {
    try {
      setLoading(true);
      const result = await Google.logInAsync({
        androidClientId:
          "146264078726-g7q754q9t9lgoutv38d4jdlge8l9ffi2.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });
      const data = {
        user: {
          email: result.user.email,
          id: result.user.id,
        },
      };
      fetchWithoutAu(API_URL + "user/login-google-mobile", "POST", data).then(
        async (data) => {
          setContent(data.token);
          await SecureStore.setItemAsync(TOKEN_NAME, data.token);
          setLoading(false);
          navigation.popToTop();
        },
        (error) => {
          setLoading(false);
          alert(error.message);
        }
      );
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={[styles.container, { backgroundColor: theme.LOGIN_BACKGROUND }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <MyInput text={email} setText={setEmail} lable={"EMAIL"} />
        <MyInput
          text={password}
          setText={setPassword}
          style={{ marginTop: 35 }}
          isPassWord={true}
          lable={languageConstant.PASSWORD.toUpperCase()}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(languageConstant.FORGOT_PASSWORD);
          }}
        >
          <Text style={styles.forgotPassword}>
            {languageConstant.FORGOT_PASSWORD}
          </Text>
        </TouchableWithoutFeedback>
        <MyButton
          handleClick={handleLogin}
          style={styles.button}
          text={languageConstant.LOGIN.toUpperCase()}
        />
        <TouchableHighlight onPress={async () => loginGoogle()}>
          <View style={styles.loginGoogle}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../../../assets/icons/google.png")}
            />
            <Text style={{ marginLeft: 10 }}>LOGIN WITH GOOGLE</Text>
          </View>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={handleRegister}>
          <Text style={styles.create}>{languageConstant.CREATE_ACCOUNT}</Text>
        </TouchableWithoutFeedback>
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
  button: {
    backgroundColor: "dodgerblue",
    marginTop: 30,
  },
  forgotPassword: {
    color: "gray",
    alignSelf: "flex-end",
    fontSize: 15,
    marginTop: 15,
  },
  create: {
    color: "gray",
    alignSelf: "center",
    fontSize: 15,
    paddingTop: 70,
    fontWeight: "bold",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 20,
  },
  loginGoogle: {
    marginTop: 15,
    backgroundColor: "white",
    borderColor: "dodgerblue",
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    paddingTop: 4,
    paddingBottom: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
