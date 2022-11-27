import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const AddReview = () => {
  const [data, setData] = useState({
    name: "",
    rating: 0,
    comment: "",
    submitting: false,
  });

  function handelInput(text, data) {
    setData((prev) => ({ ...prev, [data]: text }));
  }
  function ratingFinished(rating) {
    setData((prev) => ({ ...prev, rating: rating }));
  }
  const navigation = useNavigation();

  function handleSubmit() {
    setData((prev) => ({ ...prev, submitting: true }));
    setTimeout(() => {
      setData((prev) => ({ ...prev, submitting: false }));
      return navigation.goBack();
    }, 1000);
  }
  return (
    <View styles={styles.root}>
      <Text styles={styles.addReview}>Add Review</Text>
      <TextInput
        style={styles.input}
        value={data.name}
        onChange={(text) => handelInput(text, "name")}
      />
      <Text style={styles.rating}>Your Rating</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={40}
        startingValue={0}
        onFinishRating={ratingFinished}
      />
      <TextInput
        style={[styles.input, { height: 120 }]}
        multiline={true}
        value={data.comment}
        onChangeText={(text) => handelInput(text, "comment")}
      />
      {data.submitting && <ActivityIndicator />}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
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

export default AddReview;
