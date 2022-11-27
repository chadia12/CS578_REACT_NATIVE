import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FoodEdit() {
  const naviagation = useNavigation();
  const route = useRoute();
  const {food} = route.params;
  const [foodData, setFoodData] = useState(food);

  const handleEditFood = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    await fetch(
      `http://localhost:3000/restaurants/owners/${id}/foods/${foodData._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        body: JSON.stringify(foodData),
      }
    );
    naviagation.navigate("foodList", { reload: true });
  };
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/one2.png")}
        style={{ width: 400, height: 200 }}
      />

      <TextInput
        style={styles.input}
        value={foodData.name}
        onChangeText={(text) => setFoodData({ ...foodData, name: text })}
      />

      <TextInput
        style={styles.input}
        value={foodData.origin}
        onChangeText={(text) => setFoodData({ ...foodData, origin: text })}
      />
      <TextInput
        style={styles.input}
        value={foodData.price}
        onChangeText={(text) => setFoodData({ ...foodData, price: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Image Link"
        value={foodData.image}
        onChangeText={(text) => setFoodData({ ...foodData, image: text })}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleEditFood}>
        <Text style={styles.registerButtonText}>Save </Text>
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
  textHeader: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#616748",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 100,
  },
  registerButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  loginText: {
    fontSize: 18,
    textAlign: "center",
    color: "#82A43A",
  },
});
