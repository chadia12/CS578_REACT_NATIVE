import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Stars from "./Stars";

const CourseDetails = () => {
  const route = useRoute();
  const { course } = route.params;
  const navigation = useNavigation();
  function addReview() {
    navigation.navigate("addReview");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.infoHeader}>
          <Text style={styles.name}>{course.title}</Text>
          <Text style={styles.faculty}>{course.code}</Text>
          <Text style={styles.faculty}>{course.faculty}</Text>
          <Stars rating={course.rating} />
          <TouchableOpacity style={styles.button} onPress={addReview}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoHeader: {
    padding: 20,
  },
  info: {
    marginTop: 20,
  },
  name: {
    fontSize: 24,
  },
  faculty: {
    color: "grey",
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
});

export default CourseDetails;
