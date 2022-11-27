import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import Course from "./Course";
import Header from "./Header.ios";

const data = [
  {
    title: "Web Application Programming",
    faculty: "Asaad Saad",
    code: "CS472",
    rating: 4,
  },
  {
    title: "Modern Web Application",
    faculty: "Asaad Saad",
    code: "CS572",
    rating: 5,
  },
  {
    title: "Enterprise Architecture",
    faculty: "Joe Bruen",
    code: "CS557",
    rating: 4,
  },
  { title: "Algorithms", faculty: "Clyde Ruby", code: "CS421", rating: 5 },

  {
    title: "Object Oriented JavaScript",
    faculty: "Keith Levi",
    code: "CS372",
    rating: 3,
  },
  { title: "Big Data", faculty: "Prem Nair", code: "CS371", rating: 5 },
  {
    title: "Web Application Architecture",
    faculty: "Rakesh Shrestha",
    code: "CS377",
    rating: 5,
  },
  {
    title: "Big Data Analytics",
    faculty: "Mrudula Mukadam",
    code: "CS378",
    rating: 5,
  },
];

export default function CoursesList() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const route = useRoute();

  const getCourses = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/departments/cs/courses"
      );
      const result = await response.json();

      setInfo(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (route.params && route.params.reload) {
      getCourses();
    }
  }, [route.params]);

  function handleSearch(text) {
    if (text) {
      const res = info.filter((cs) =>
        cs.title.toLowerCase().includes(text.toLowerCase())
      );
      setInfo(res);
      setSearch(text);
    } else {
      setInfo(info);
      setSearch(text);
    }
  }

  function handleAdd() {
    navigation.navigate("addCourse");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? 30 : 0,
        paddingBottom: 200,
        marginBottom: 20,
      }}
    >
      <View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          value={search}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleAdd}>
          <Text style={styles.submitButtonText}>ADD COURSE</Text>
        </TouchableOpacity>
        <FlatList
          data={info}
          renderItem={({ item }) => <Course data={item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
