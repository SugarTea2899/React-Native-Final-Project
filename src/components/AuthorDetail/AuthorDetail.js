import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { fetchWithoutAu } from "../../api/fetchData";
import { UserContext } from "../../contexts/UserContext";
import { API_URL } from "../../globals/constants";
import ListCourse from "../Courses/ListCourse";
import AuthorHeader from "./AuthorHeader/AuthorHeader";

const AuthorDetail = ({ route, navigation }) => {
  const { authorId } = route.params;
  const { setLoading } = useContext(UserContext);

  const [author, setAuthor] = useState({
    avatar:
      "http://lh3.googleusercontent.com/proxy/UHY_fKWgsC8byTsnG0A5C1SI3Vnb2IihMIlG-ss9bbfKPp-95Alj6_A-bva88bAsqEVhFfewxaHCgTqnP3kTA2TUs9bdHEBswytvaLZQxhYhdkS9ewjIpcJE874HnPGracIdaMt6ccCwR1zx",
    name: "",
    email: "",
    phone: "",
    skills: [],
    courses: [],
  });

  const getListCourse = () => {
    const reuslt = author.courses.map((item) => {
      return { ...item, instructorName: author.name };
    });

    return reuslt;
  };
  useEffect(() => {
    setLoading(true);
    fetchWithoutAu(API_URL + `instructor/detail/${authorId}`, "GET").then(
      (data) => {
        setAuthor(data.payload);
        setLoading(false);
      },
      (erro) => {
        console.log(erro.message);
        setLoading(false);
      }
    );
  }, []);

  const header = <AuthorHeader author={author} />;

  return (
    <View style={styles.container}>
      <ListCourse
        courses={getListCourse()}
        navigation={navigation}
        style={styles.list}
        hideTotal
        header={header}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthorDetail;
