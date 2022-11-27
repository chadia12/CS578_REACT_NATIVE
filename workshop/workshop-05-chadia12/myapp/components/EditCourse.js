import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function EditCourse() {
  const route = useRoute();
  const { course } = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState(course);

  const handleSubmit = async () => {
    await fetch(`http://localhost:3000/departments/cs/courses/${data.code}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigation.navigate("courseList", { reload: true });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.courseText}> Edit Course </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={data.title}
        onChangeText={(text) => setData({ ...data, title: text })}
      />
      <TextInput
        style={styles.input}
        editable={false}
        placeholder="Faculty"
        value={data.faculty}
        onChangeText={(text) => setData({ ...data, faculty: text })}
      />
      <TextInput
        style={styles.input}
        editable={false}
        placeholder="Code"
        value={data.code}
        onChangeText={(text) => setData({ ...data, code: text })}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  courseText: {
    marginLeft: 100,
    fontSize: 30,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
