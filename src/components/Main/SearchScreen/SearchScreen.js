import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import ListCourse from "../../Courses/ListCourse";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListAuthors from "../../Authors/ListAuthors/ListAuthors";
import MixedList from "../../MixedList/MixedList";
import SearchBar from "../../Other/SearchBar/SearchBar";
import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
import { UserContext } from "../../../contexts/UserContext";
import { fetchWithoutAu } from "../../../api/fetchData";
import { API_URL } from "../../../globals/constants";

const Tab = createMaterialTopTabNavigator();

const SearchScreen = ({ navigation }) => {
  const { languageConstant } = useContext(LanguageContext);
  const { setLoading, token } = useContext(UserContext);
  const PAGE_SIZE = 5;

  const [result, setResult] = useState({
    courses: [],
    authors: [],
    totalCourses: 0,
    totalAuthors: 0,
    searchValue: "",
    offsetCourses: 0,
    offsetAuthors: 0,
  });

  const getMixedList = () => {
    return [
      {
        title: languageConstant.COURSE,
        total: result.totalCourses,
        data: result.courses,
      },
      {
        title: languageConstant.AUTHOR,
        total: result.totalAuthors,
        data: result.authors,
      },
    ];
  };

  const selectHistory = (value) => {
    setResult({ ...result, searchValue: value });
  };

  const search = (value, newOffset) => {
    if (value && value.length !== 0 && token !== null) {
      setLoading(true);
      const data = {
        token: token,
        keyword: value,
        limit: PAGE_SIZE,
        offset: newOffset,
      };
      fetchWithoutAu(API_URL + "course/searchV2", "POST", data).then(
        (data) => {
          setLoading(false);
          setResult({
            courses: data.payload.courses.data.slice(),
            totalCourses: data.payload.courses.total,
            totalAuthors: data.payload.instructors.total,
            authors: data.payload.instructors.data.slice(),
            searchValue: value,
            offsetCourses: 0,
            offsetAuthors: 0,
          });
        },
        (error) => {
          setLoading(false);
          console.log(error.message);
        }
      );
    } else {
      if (value && value.length === 0)
        setResult({
          courses: [],
          authors: [],
          searchValue: "",
          totalCourses: 0,
          totalAuthors: 0,
          offsetCourses: 0,
          offsetAuthors: 0,
        });
    }
  };

  const loadMoreAuthors = () => {
    if (result.courses.length < result.totalCourses) {
      if (
        result.searchValue &&
        result.searchValue.length !== 0 &&
        token !== null
      ) {
        const data = {
          token: token,
          keyword: result.searchValue,
          limit: PAGE_SIZE,
          offset: result.offsetAuthors + PAGE_SIZE,
        };

        fetchWithoutAu(API_URL + "course/searchV2", "POST", data).then(
          (data) => {
            setResult({
              ...result,
              authors: [
                ...result.authors,
                ...data.payload.instructors.data.slice(),
              ],
              offsetAuthors: result.offsetAuthors + PAGE_SIZE,
            });
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        if (result.searchValue && result.searchValue.length === 0)
          setResult({
            courses: [],
            authors: [],
            searchValue: "",
            totalCourses: 0,
            totalAuthors: 0,
            offsetCourses: 0,
          });
      }
    }
  };

  const loadMoreCourses = () => {
    if (result.courses.length < result.totalCourses) {
      if (
        result.searchValue &&
        result.searchValue.length !== 0 &&
        token !== null
      ) {
        const data = {
          token: token,
          keyword: result.searchValue,
          limit: PAGE_SIZE,
          offset: result.offsetCourses + PAGE_SIZE,
        };

        fetchWithoutAu(API_URL + "course/searchV2", "POST", data).then(
          (data) => {
            setResult({
              ...result,
              courses: [
                ...result.courses,
                ...data.payload.courses.data.slice(),
              ],
              offsetCourses: result.offsetCourses + PAGE_SIZE,
            });
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        if (result.searchValue && result.searchValue.length === 0)
          setResult({
            courses: [],
            authors: [],
            searchValue: "",
            totalCourses: 0,
            totalAuthors: 0,
            offsetCourses: 0,
          });
      }
    }
  };
  return (
    <View style={styles.container}>
      <SearchBar
        setResult={setResult}
        value={result.searchValue}
        search={search}
      />
      {result.searchValue === "" ? (
        <HistoryScreen selectHistory={selectHistory} />
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name={languageConstant.ALL}
            children={() => (
              <MixedList navigation={navigation} results={getMixedList()} />
            )}
          />
          <Tab.Screen
            name={languageConstant.COURSE}
            children={() => (
              <ListCourse
                navigation={navigation}
                courses={result.courses}
                total={result.totalCourses}
                loadMore={loadMoreCourses}
              />
            )}
          />
          <Tab.Screen
            name={languageConstant.AUTHOR}
            children={() => (
              <ListAuthors
                navigation={navigation}
                authors={result.authors}
                total={result.totalAuthors}
                loadMore={loadMoreAuthors}
              />
            )}
          />
        </Tab.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SearchScreen;
