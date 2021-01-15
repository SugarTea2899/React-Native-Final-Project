import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Option from "./Option/Option";

const Setting = () => {
  const { languageConstant, setLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [language, setLanguageChange] = useState(
    languageConstant.PHONE_NUMBER === "Phone" ? "English" : "Việt Nam"
  );

  const handleLanguageChange = (isEnglish) => {
    setLanguage(isEnglish);
    setLanguageChange(isEnglish ? "English" : "Việt Nam");
  };

  const handleThemeChange = (isDark) => {
      setTheme(isDark)
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Option
          value={language === "English"}
          style={{ marginTop: 20 }}
          title={languageConstant.LANGUAGE}
          helperText={"English"}
          onChange={handleLanguageChange}
        />
        <Option
          value={theme.theme === "dark"}
          style={{ marginTop: 20 }}
          title={languageConstant.THEME}
          helperText="Dark"
          onChange={handleThemeChange}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  line: {
    height: 0.5,
    backgroundColor: "gray",
    marginTop: 20,
  },
});

export default Setting;
